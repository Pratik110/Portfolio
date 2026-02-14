import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 's3', label: 'S3', x: 60, y: 70, tech: 'Amazon S3', desc: 'Raw landing zone for source files and event payloads.' },
  { id: 'lambda', label: 'Lambda', x: 220, y: 70, tech: 'AWS Lambda', desc: 'Validates files, triggers orchestration events.' },
  { id: 'airflow', label: 'Airflow', x: 380, y: 70, tech: 'Apache Airflow', desc: 'Schedules DAGs, dependencies, retries and alerts.' },
  { id: 'spark', label: 'Spark', x: 540, y: 70, tech: 'Apache Spark', desc: 'Distributed transforms, joins, aggregations at scale.' },
  { id: 'snowflake', label: 'Snowflake', x: 700, y: 70, tech: 'Snowflake', desc: 'Serves modeled analytics datasets for BI and ML.' },
];

const linkSegments = [
  { from: nodes[0], to: nodes[1] },
  { from: nodes[1], to: nodes[2] },
  { from: nodes[2], to: nodes[3] },
  { from: nodes[3], to: nodes[4] },
];

const DataFlowDiagram = () => {
  const [hovered, setHovered] = useState<string>('');
  const [failure, setFailure] = useState(false);
  const brokenNode = 'spark';

  const tooltip = useMemo(() => nodes.find((n) => n.id === hovered), [hovered]);

  return (
    <section id="architecture-flow" className="py-20 neon-section" data-testid="data-flow-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl neon-title">Real-Time Data Flow Diagram</h2>
          <p className="neon-subtitle text-lg">S3 → Lambda → Airflow → Spark → Snowflake</p>
        </div>

        <div className="neon-card rounded-xl p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setFailure((f) => !f)}
              className="neon-button-secondary rounded-lg px-4 py-2"
              data-testid="toggle-failure"
            >
              {failure ? 'Disable Failure Simulation' : 'Simulate Failure'}
            </button>
          </div>

          <div className="overflow-x-auto">
            <svg viewBox="0 0 780 140" className="w-full min-w-[720px]" role="img" aria-label="Data flow diagram">
              {linkSegments.map((l) => (
                <line
                  key={`${l.from.id}-${l.to.id}`}
                  x1={l.from.x + 45}
                  y1={l.from.y}
                  x2={l.to.x - 45}
                  y2={l.to.y}
                  stroke="rgba(148, 163, 184, 0.65)"
                  strokeWidth="2"
                />
              ))}

              {linkSegments.map((l, i) => (
                <motion.circle
                  key={`packet-${i}`}
                  cx={l.from.x + 45}
                  cy={l.from.y}
                  r="4"
                  fill={failure && l.from.id === 'airflow' ? '#fb7185' : '#93c5fd'}
                  animate={{
                    cx: failure && l.to.id === brokenNode ? [l.from.x + 45, l.from.x + 120, l.from.x + 95] : [l.from.x + 45, l.to.x - 45],
                    opacity: failure && l.to.id === brokenNode ? [1, 1, 0.4] : [1, 0.9],
                  }}
                  transition={{ repeat: Infinity, duration: 1.8 + i * 0.2, ease: 'linear' }}
                />
              ))}

              {nodes.map((n) => (
                <g
                  key={n.id}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered('')}
                  data-testid={`flow-node-${n.id}`}
                >
                  <rect
                    x={n.x - 45}
                    y={n.y - 22}
                    width="90"
                    height="44"
                    rx="10"
                    fill={failure && n.id === brokenNode ? 'rgba(190,24,93,0.35)' : 'rgba(30,41,59,0.82)'}
                    stroke={failure && n.id === brokenNode ? 'rgba(251,113,133,0.85)' : 'rgba(148,163,184,0.45)'}
                  />
                  <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#e2e8f0" fontSize="13" fontFamily="Inter, sans-serif">{n.label}</text>
                </g>
              ))}
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="neon-panel rounded-lg p-4 min-h-[120px]">
              {tooltip ? (
                <>
                  <p className="text-slate-100 font-semibold">{tooltip.label} · {tooltip.tech}</p>
                  <p className="text-slate-300 mt-1">{tooltip.desc}</p>
                  <p className="text-slate-400 text-sm mt-2">Real-world: used to keep ingestion-to-analytics pipeline observable and recoverable.</p>
                </>
              ) : (
                <p className="text-slate-400">Hover over any component to inspect details.</p>
              )}
            </div>

            <div className="rounded-lg border border-slate-600/40 bg-[#0b1016] p-4 font-mono text-sm">
              <p className="text-slate-400 mb-2">runtime.log</p>
              {failure ? (
                <>
                  <p className="text-rose-300">[ERROR] spark-job failed: executor heartbeat timeout</p>
                  <p className="text-amber-200">[WARN] airflow retry #1 scheduled in 60s</p>
                  <p className="text-slate-300">[INFO] s3 payload preserved; replay is safe</p>
                </>
              ) : (
                <>
                  <p className="text-emerald-300">[INFO] ingest healthy · throughput stable</p>
                  <p className="text-slate-300">[INFO] orchestration SLA within target</p>
                  <p className="text-slate-300">[INFO] warehouse load complete</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlowDiagram;
