import React from 'react';
import { useGameScore } from '@/context/GameScoreContext';

const rankFromScore = (score: number) => {
  if (score >= 140) return 'Elite Data Engineer';
  if (score >= 85) return 'Senior Data Engineer';
  if (score >= 50) return 'Mid-Level Engineer';
  return 'Junior Engineer';
};

const InteractiveScoreCard = () => {
  const { score, resetScore } = useGameScore();

  return (
    <section id="score-hub" className="py-14 neon-section" data-testid="score-hub-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="neon-panel rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-slate-300 text-sm uppercase tracking-wide">Interactive Progress</p>
            <h3 className="text-2xl text-slate-100 font-semibold">Total Score: {score}</h3>
            <p className="text-slate-300">Current Level: <span className="text-blue-200 font-semibold">{rankFromScore(score)}</span></p>
          </div>
          <button onClick={resetScore} className="neon-button-secondary rounded-lg px-4 py-2 w-full md:w-auto" data-testid="score-reset">
            Reset Global Score
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveScoreCard;
