import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useGameScore } from '@/context/GameScoreContext';

type Employee = { id: number; name: string; department_id: number };
type Department = { id: number; department: string };
type Salary = { employee_id: number; salary: number };

type Challenge = {
  id: string;
  title: string;
  prompt: string;
  solution: string;
  check: (query: string) => boolean;
  run: () => Array<Record<string, string | number>>;
  incorrectHint: string;
};

const employees: Employee[] = [
  { id: 1, name: 'Aarav', department_id: 1 },
  { id: 2, name: 'Mia', department_id: 2 },
  { id: 3, name: 'Noah', department_id: 3 },
  { id: 4, name: 'Isha', department_id: 1 },
  { id: 5, name: 'Liam', department_id: 2 },
  { id: 6, name: 'Riya', department_id: 3 },
  { id: 7, name: 'Ethan', department_id: 4 },
  { id: 8, name: 'Sara', department_id: 4 },
];

const departments: Department[] = [
  { id: 1, department: 'Data Engineering' },
  { id: 2, department: 'Analytics' },
  { id: 3, department: 'Platform' },
  { id: 4, department: 'Security' },
];

const salaries: Salary[] = [
  { employee_id: 1, salary: 152000 },
  { employee_id: 2, salary: 140000 },
  { employee_id: 3, salary: 133000 },
  { employee_id: 4, salary: 126000 },
  { employee_id: 5, salary: 118000 },
  { employee_id: 6, salary: 111000 },
  { employee_id: 7, salary: 147000 },
  { employee_id: 8, salary: 121000 },
];

const normalize = (q: string) => q.toLowerCase().replace(/\s+/g, ' ').trim();

const topPaid = () =>
  [...employees]
    .map((e) => ({ ...e, salary: salaries.find((s) => s.employee_id === e.id)?.salary ?? 0 }))
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 3)
    .map((r) => ({ name: r.name, salary: r.salary }));

const countByDept = () =>
  departments.map((d) => ({
    department: d.department,
    employee_count: employees.filter((e) => e.department_id === d.id).length,
  }));

const avgByDept = () =>
  departments.map((d) => {
    const deptEmployees = employees.filter((e) => e.department_id === d.id).map((e) => e.id);
    const deptSalaries = salaries.filter((s) => deptEmployees.includes(s.employee_id));
    const avg = deptSalaries.reduce((sum, s) => sum + s.salary, 0) / Math.max(1, deptSalaries.length);
    return { department: d.department, avg_salary: Math.round(avg) };
  });

const challenges: Challenge[] = [
  {
    id: 'top-paid',
    title: 'Top 3 Highest Paid Employees',
    prompt: 'Return employee name + salary for top 3 highest salaries.',
    solution: `SELECT e.name, s.salary\nFROM employees e\nJOIN salaries s ON e.id = s.employee_id\nORDER BY s.salary DESC\nLIMIT 3;`,
    check: (query) => {
      const q = normalize(query);
      return q.includes('from employees') && q.includes('join salaries') && q.includes('order by') && q.includes('desc') && q.includes('limit 3');
    },
    run: topPaid,
    incorrectHint: 'Use JOIN on salaries, ORDER BY salary DESC, and LIMIT 3.',
  },
  {
    id: 'count-by-dept',
    title: 'Count Employees by Department',
    prompt: 'Return department and employee count.',
    solution: `SELECT d.department, COUNT(e.id) AS employee_count\nFROM departments d\nLEFT JOIN employees e ON d.id = e.department_id\nGROUP BY d.department;`,
    check: (query) => {
      const q = normalize(query);
      return q.includes('from departments') && q.includes('join employees') && q.includes('count') && q.includes('group by');
    },
    run: countByDept,
    incorrectHint: 'Start from departments, join employees, COUNT and GROUP BY department.',
  },
  {
    id: 'avg-salary',
    title: 'Average Salary per Department',
    prompt: 'Return department and average salary.',
    solution: `SELECT d.department, AVG(s.salary) AS avg_salary\nFROM departments d\nJOIN employees e ON d.id = e.department_id\nJOIN salaries s ON e.id = s.employee_id\nGROUP BY d.department;`,
    check: (query) => {
      const q = normalize(query);
      return q.includes('from departments') && q.includes('join employees') && q.includes('join salaries') && q.includes('avg') && q.includes('group by');
    },
    run: avgByDept,
    incorrectHint: 'Join departments -> employees -> salaries, then AVG with GROUP BY department.',
  },
];

const SQLPlaygroundChallenge = () => {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [query, setQuery] = useState(challenges[0].solution);
  const [feedback, setFeedback] = useState<string>('');
  const [result, setResult] = useState<Array<Record<string, string | number>>>([]);
  const [awarded, setAwarded] = useState<Record<string, boolean>>({});
  const { addPoints } = useGameScore();

  const challenge = challenges[challengeIndex];

  const totalSqlPoints = useMemo(() => Object.values(awarded).filter(Boolean).length * 15, [awarded]);

  const runQuery = () => {
    if (challenge.check(query)) {
      setResult(challenge.run());
      setFeedback('success');
      if (!awarded[challenge.id]) {
        setAwarded((prev) => ({ ...prev, [challenge.id]: true }));
        addPoints(15);
      }
      return;
    }
    setResult([]);
    setFeedback(challenge.incorrectHint);
  };

  const resetChallenge = () => {
    setQuery(challenge.solution);
    setFeedback('');
    setResult([]);
  };

  const reveal = () => {
    setQuery(challenge.solution);
    setFeedback('Solution revealed. Run it to validate output.');
  };

  const switchChallenge = (i: number) => {
    setChallengeIndex(i);
    setQuery(challenges[i].solution);
    setFeedback('');
    setResult([]);
  };

  return (
    <section id="sql-playground" className="py-20 neon-section" data-testid="sql-playground-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl neon-title" data-testid="sql-playground-title">SQL Playground Challenge</h2>
          <p className="neon-subtitle text-lg">Solve SQL tasks against a built-in dataset and earn points.</p>
        </div>

        <div className="neon-card rounded-xl p-6">
          <div className="flex flex-wrap gap-2 mb-5">
            {challenges.map((item, i) => (
              <button
                key={item.id}
                onClick={() => switchChallenge(i)}
                className={`rounded-full px-4 py-2 text-sm ${i === challengeIndex ? 'neon-button-primary' : 'neon-button-secondary'}`}
              >
                {i + 1}. {item.title}
              </button>
            ))}
          </div>

          <p className="text-slate-200 mb-3">{challenge.prompt}</p>

          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-44 rounded-lg bg-[#0d1219] border border-slate-600/50 p-3 font-mono text-sm text-slate-100"
            data-testid="sql-editor"
          />

          <div className="flex flex-wrap gap-3 mt-4">
            <button onClick={runQuery} className="neon-button-primary rounded-lg px-4 py-2" data-testid="sql-run">Run Query</button>
            <button onClick={resetChallenge} className="neon-button-secondary rounded-lg px-4 py-2" data-testid="sql-reset">Reset</button>
            <button onClick={reveal} className="neon-button-secondary rounded-lg px-4 py-2" data-testid="sql-reveal">Reveal Solution</button>
            <span className="ml-auto neon-chip rounded-full px-3 py-1 text-sm">SQL Points: {totalSqlPoints}</span>
          </div>

          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-lg border border-slate-500/40 bg-slate-900/60 p-3"
            >
              {feedback === 'success' ? (
                <p className="text-emerald-300">Correct query. Output validated and points awarded.</p>
              ) : (
                <p className="text-amber-200">{feedback}</p>
              )}
            </motion.div>
          )}

          {result.length > 0 && (
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-600/40">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-800/70">
                  <tr>
                    {Object.keys(result[0]).map((k) => (
                      <th key={k} className="text-left px-3 py-2 text-slate-200 uppercase tracking-wide text-xs">{k}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.map((row, idx) => (
                    <tr key={idx} className="border-t border-slate-700/60">
                      {Object.values(row).map((val, i) => (
                        <td key={`${idx}-${i}`} className="px-3 py-2 text-slate-100">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SQLPlaygroundChallenge;
