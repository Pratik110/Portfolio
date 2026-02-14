import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useGameScore } from '@/context/GameScoreContext';

type Option = {
  text: string;
  correct: boolean;
  why: string;
};

type Scenario = {
  id: string;
  title: string;
  logs: string[];
  options: Option[];
  explanation: string;
};

const scenarios: Scenario[] = [
  {
    id: 'schema-mismatch',
    title: 'Schema mismatch (INT vs STRING)',
    logs: [
      '[ERROR] parquet_reader: cannot cast column user_id STRING to INT',
      '[WARN] ingest_job: 14,210 rows rejected in batch_2026_02_14',
      '[INFO] retry_policy: retries exhausted after 3 attempts',
    ],
    options: [
      { text: 'Apply schema evolution with explicit cast and null-handling in ETL', correct: true, why: 'Use a controlled cast path and validation so malformed values are quarantined instead of crashing the job.' },
      { text: 'Force overwrite target table schema to STRING for all columns', correct: false, why: 'Overwriting all column types breaks downstream contracts and hides data quality issues.' },
      { text: 'Disable type checks to let bad records pass', correct: false, why: 'This causes silent corruption and unstable analytics.' },
      { text: 'Increase Spark executor memory only', correct: false, why: 'Memory tuning does not solve a semantic type conflict.' },
    ],
    explanation: 'Best fix is controlled schema evolution + explicit casting + dead-letter path for invalid values.',
  },
  {
    id: 'partition-skew',
    title: 'Partition skew',
    logs: [
      '[WARN] stage_24: partition 3 has 89% of records',
      '[INFO] shuffle_read: p95 task duration 19x higher than median',
      '[ERROR] spark_job: stage timeout exceeded SLA window',
    ],
    options: [
      { text: 'Use salting and rebalance/repartition on skewed key before join', correct: true, why: 'Salting and repartitioning spread heavy keys and normalize task time.' },
      { text: 'Reduce cluster size to control cost', correct: false, why: 'This increases pressure and worsens skew impact.' },
      { text: 'Run job less frequently', correct: false, why: 'Schedule changes do not fix skewed data distribution.' },
      { text: 'Drop the skewed key from join', correct: false, why: 'This changes business logic and produces wrong results.' },
    ],
    explanation: 'Skew is a data distribution issue, so rebalance keys and join strategy.',
  },
  {
    id: 'oom',
    title: 'Out of memory error',
    logs: [
      '[ERROR] executor-5 java.lang.OutOfMemoryError: Java heap space',
      '[WARN] gc_overhead: 96% time spent in GC',
      '[INFO] query_plan: wide transformation + large shuffle',
    ],
    options: [
      { text: 'Cache fewer intermediates, tune partitions, and avoid wide collect operations', correct: true, why: 'This lowers memory pressure at source and stabilizes executors.' },
      { text: 'Only increase driver memory', correct: false, why: 'Executor OOM is not fixed by driver-only tuning.' },
      { text: 'Disable GC logs', correct: false, why: 'Turning off logs does not resolve memory exhaustion.' },
      { text: 'Switch output from parquet to csv', correct: false, why: 'Output format is not the root issue here.' },
    ],
    explanation: 'Right fix is memory-aware transformations + partition strategy + targeted executor tuning.',
  },
  {
    id: 'missing-s3',
    title: 'Missing S3 file',
    logs: [
      '[ERROR] S3AFileSystem: NoSuchKey s3://prod-raw/orders/dt=2026-02-14/file-17.parquet',
      '[WARN] orchestrator: upstream task marked success but artifact missing',
      '[INFO] airflow: downstream blocked due to dependency failure',
    ],
    options: [
      { text: 'Add existence check + retry with backoff + upstream contract alert', correct: true, why: 'Validation and alerting prevent silent broken dependencies.' },
      { text: 'Hardcode yesterday\'s path', correct: false, why: 'Hardcoding masks failure and risks stale data.' },
      { text: 'Skip the task and continue pipeline', correct: false, why: 'Continuing with missing source creates incomplete datasets.' },
      { text: 'Delete downstream table and rerun next week', correct: false, why: 'Destructive and unrelated to immediate root cause.' },
    ],
    explanation: 'Data contracts and artifact existence checks are the production-safe fix.',
  },
  {
    id: 'kafka-lag',
    title: 'Kafka consumer lag',
    logs: [
      '[WARN] kafka_consumer_group=orders-enricher lag=2,481,220 messages',
      '[INFO] rebalance events increased 5x in 30 minutes',
      '[ERROR] stream_sla breach: end-to-end latency > 15 min',
    ],
    options: [
      { text: 'Scale consumer group, tune poll batch/commit strategy, and rebalance partitions', correct: true, why: 'Lag reduction needs throughput + partition-consumer alignment.' },
      { text: 'Reduce retention to 1 hour', correct: false, why: 'Retention changes risk data loss and do not increase processing speed.' },
      { text: 'Pause producer applications', correct: false, why: 'This avoids load temporarily but does not solve consumer bottleneck.' },
      { text: 'Restart broker daily', correct: false, why: 'Frequent restarts add instability and are not a throughput solution.' },
    ],
    explanation: 'Correct response is consumer throughput tuning + partition strategy and stability.',
  },
];

const getBadge = (score: number) => {
  if (score >= 85) return 'Senior Data Engineer';
  if (score >= 50) return 'Mid-Level Engineer';
  return 'Junior Engineer';
};

const FixPipelineGame = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [typedLog, setTypedLog] = useState('');
  const [localScore, setLocalScore] = useState(0);
  const { addPoints } = useGameScore();

  const scenario = scenarios[index];
  const isLast = index === scenarios.length - 1;
  const complete = answered && isLast;

  const logText = useMemo(() => scenario.logs.join('\n'), [scenario.logs]);

  useEffect(() => {
    setTypedLog('');
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTypedLog(logText.slice(0, i));
      if (i >= logText.length) clearInterval(t);
    }, 12);
    return () => clearInterval(t);
  }, [logText]);

  const choose = (optionIndex: number) => {
    if (answered) return;
    setSelected(optionIndex);
    setAnswered(true);
    const option = scenario.options[optionIndex];
    if (option.correct) {
      setLocalScore((s) => s + 20);
      addPoints(20);
    }
  };

  const next = () => {
    if (isLast) return;
    setIndex((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setLocalScore(0);
  };

  return (
    <section id="pipeline-game" className="py-20 neon-section" data-testid="pipeline-game-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl neon-title" data-testid="pipeline-game-title">Mini Fix The Pipeline Game</h2>
          <p className="neon-subtitle text-lg">Debug production-style failures, pick the best fix, and level up.</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="neon-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between gap-4 mb-5">
              <h3 className="text-2xl text-slate-100 font-semibold">{index + 1}. {scenario.title}</h3>
              <span className="neon-chip rounded-full px-3 py-1 text-sm">Score: {localScore}</span>
            </div>

            <div className="rounded-lg border border-slate-600/40 bg-[#0a0f14] p-4 mb-5">
              <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">Runtime logs</p>
              <pre className="text-sm text-slate-200 whitespace-pre-wrap font-mono min-h-[96px]">{typedLog}</pre>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {scenario.options.map((option, optionIndex) => {
                const picked = selected === optionIndex;
                const showState = answered && (picked || option.correct);
                return (
                  <button
                    key={option.text}
                    onClick={() => choose(optionIndex)}
                    className={`text-left rounded-lg border px-4 py-3 transition ${showState ? (option.correct ? 'border-emerald-400/70 bg-emerald-500/10' : 'border-rose-400/70 bg-rose-500/10') : 'border-slate-600/40 bg-slate-800/40 hover:bg-slate-700/40'}`}
                    data-testid={`pipeline-option-${scenario.id}-${optionIndex}`}
                  >
                    <p className="text-slate-100">{option.text}</p>
                    {answered && picked && <p className="text-sm mt-2 text-slate-300">{option.why}</p>}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="mt-5 rounded-lg border border-slate-500/40 bg-slate-900/50 p-4">
                <p className="text-slate-100 font-semibold">{selected !== null && scenario.options[selected].correct ? '✅ Correct fix selected' : '❌ Not the best fix'}</p>
                <p className="text-slate-300 mt-1">{scenario.explanation}</p>
                <div className="mt-3 space-y-1">
                  {scenario.options.map((option) => (
                    <p key={option.text} className="text-sm text-slate-300">
                      {option.correct ? '✅' : '❌'} {option.why}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-slate-400">Scenario {index + 1} of {scenarios.length}</p>
              {!complete && (
                <button
                  onClick={next}
                  disabled={!answered}
                  className="neon-button-primary rounded-lg px-4 py-2 disabled:opacity-50"
                  data-testid="pipeline-next"
                >
                  {isLast ? 'Finish' : 'Next Scenario'}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {complete && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 neon-panel rounded-xl p-6"
            data-testid="pipeline-summary"
          >
            <h4 className="text-2xl text-slate-100 font-semibold">Final Score Summary</h4>
            <p className="text-slate-300 mt-2">You scored <span className="text-yellow-300 font-semibold">{localScore}</span> points.</p>
            <p className="text-slate-300">Badge unlocked: <span className="text-blue-200 font-semibold">{getBadge(localScore)}</span></p>
            <button onClick={restart} className="neon-button-secondary rounded-lg px-4 py-2 mt-4" data-testid="pipeline-restart">Play Again</button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FixPipelineGame;
