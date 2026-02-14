import React, { createContext, useContext, useMemo, useState } from 'react';

type ScoreContextType = {
  score: number;
  addPoints: (points: number) => void;
  resetScore: () => void;
};

const GameScoreContext = createContext<ScoreContextType | null>(null);

export const GameScoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);

  const value = useMemo(
    () => ({
      score,
      addPoints: (points: number) => setScore((prev) => prev + Math.max(0, points)),
      resetScore: () => setScore(0),
    }),
    [score]
  );

  return <GameScoreContext.Provider value={value}>{children}</GameScoreContext.Provider>;
};

export const useGameScore = () => {
  const context = useContext(GameScoreContext);
  if (!context) {
    throw new Error('useGameScore must be used inside GameScoreProvider');
  }
  return context;
};
