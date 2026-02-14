import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type Message = { role: 'user' | 'bot'; text: string };

type QA = {
  keys: string[];
  answer: string;
};

const knowledgeBase: QA[] = [
  {
    keys: ['projects', 'built', 'work'],
    answer: 'I have delivered data engineering projects across healthcare, capital markets, HCM, and energy, including cloud migrations, settlement analytics pipelines, and production ETL orchestration.',
  },
  {
    keys: ['spark', 'optimization', 'optimizations'],
    answer: 'Spark optimizations include partition strategy tuning, skew handling, shuffle reduction, memory-aware transformation design, and performance-focused DAG patterns.',
  },
  {
    keys: ['contact', 'reach', 'email', 'phone'],
    answer: 'You can reach me via the Contact section for phone, email, LinkedIn, and GitHub. Quick route: use the “Send Email” action.',
  },
  {
    keys: ['tech stack', 'stack', 'skills', 'tools'],
    answer: 'Core stack: Python, Spark, Snowflake, AWS, Airflow, Databricks, Kafka, Docker, CI/CD pipelines, and SQL-based analytics engineering.',
  },
  {
    keys: ['resume', 'experience', 'years'],
    answer: 'I bring 6+ years in data engineering with hands-on implementation in scalable pipelines, cloud migration, and data platform reliability.',
  },
];

const quickQuestions = [
  'What projects have you built?',
  'What Spark optimizations have you done?',
  'How can I contact you?',
  'What is your tech stack?',
];

const findAnswer = (input: string) => {
  const normalized = input.toLowerCase();
  const match = knowledgeBase.find((item) => item.keys.some((k) => normalized.includes(k)));
  if (match) return match.answer;
  return "I don't have a precise answer for that yet. Try asking about projects, Spark optimizations, tech stack, or contact details.";
};

const DataBot = ({ onHireCommand }: { onHireCommand: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi, I am your portfolio data bot. Ask me anything about projects, skills, and experience.' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;

    if (q.toLowerCase() === 'sudo hire-me') {
      onHireCommand();
      setMessages((prev) => [
        ...prev,
        { role: 'user', text: q },
        { role: 'bot', text: 'Permission granted. Initiating resume package download...' },
      ]);
      setInput('');
      return;
    }

    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    setInput('');
    setTyping(true);

    const answer = findAnswer(q);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
      setTyping(false);
    }, 500);
  };

  return (
    <section id="data-bot" className="py-20 neon-section" data-testid="data-bot-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl neon-title">Chat With My Data Bot</h2>
          <p className="neon-subtitle text-lg">Frontend-only assistant powered by curated portfolio knowledge.</p>
        </div>

        <div className="neon-card rounded-xl p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickQuestions.map((q) => (
              <button key={q} onClick={() => send(q)} className="neon-button-secondary rounded-full px-3 py-1.5 text-sm" data-testid={`quick-q-${q}`}>
                {q}
              </button>
            ))}
          </div>

          <div className="rounded-lg border border-slate-600/40 bg-[#0b1016] h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((m, idx) => (
              <motion.div
                key={`${m.role}-${idx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[85%] rounded-lg px-3 py-2 ${m.role === 'user' ? 'ml-auto bg-blue-500/20 border border-blue-300/35 text-slate-100' : 'bg-slate-800/75 border border-slate-600/35 text-slate-200'}`}
              >
                {m.text}
              </motion.div>
            ))}
            {typing && <p className="text-slate-400 text-sm">Data bot is typing...</p>}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send(input);
              }}
              placeholder="Ask about projects, Spark, skills, contact..."
              className="flex-1 rounded-lg border border-slate-600/40 bg-slate-900/70 px-3 py-2 text-slate-100"
              data-testid="data-bot-input"
            />
            <button onClick={() => send(input)} disabled={!canSend} className="neon-button-primary rounded-lg px-4 py-2 disabled:opacity-50" data-testid="data-bot-send">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBot;
