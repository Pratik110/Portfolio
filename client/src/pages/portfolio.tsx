import React, { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import FixPipelineGame from '@/components/interactive/FixPipelineGame';
import SQLPlaygroundChallenge from '@/components/interactive/SQLPlaygroundChallenge';
import DataFlowDiagram from '@/components/interactive/DataFlowDiagram';
import DataBot from '@/components/interactive/DataBot';
import InteractiveScoreCard from '@/components/interactive/InteractiveScoreCard';
import resumePdf from '@assets/Resume_Pratik_Patra.pdf';

const Portfolio = () => {
  const currentYear = new Date().getFullYear();
  const [eliteMode, setEliteMode] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [hireLog, setHireLog] = useState('');
  const resetTimer = useRef<number | null>(null);
  const konamiRef = useRef(0);
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === konami[konamiRef.current]) {
        konamiRef.current += 1;
        if (konamiRef.current === konami.length) {
          setEliteMode(true);
          konamiRef.current = 0;
        }
      } else {
        konamiRef.current = 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onLogoClick = () => {
    setLogoClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) setSecretUnlocked(true);
      return next;
    });
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setLogoClicks(0), 4000);
  };

  const onHireCommand = () => {
    setHireLog('[sudo] initiating secure resume handoff...');
    window.setTimeout(() => {
      const anchor = document.createElement('a');
      anchor.href = resumePdf;
      anchor.download = 'Pratik_Patra_Resume.pdf';
      anchor.click();
      setHireLog('[ok] resume package downloaded.');
    }, 900);
  };

  return (
    <div className={`min-h-screen text-slate-100 ${eliteMode ? 'elite-mode' : ''}`}>
      <Navigation onLogoClick={onLogoClick} />
      <Hero />
      <Experience />
      <Skills />
      <InteractiveScoreCard />
      <FixPipelineGame />
      <SQLPlaygroundChallenge />
      <DataFlowDiagram />
      <DataBot onHireCommand={onHireCommand} />
      <Education />
      <Contact />

      {hireLog && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 rounded-lg border border-slate-500/40 bg-[#0b1016]/95 px-4 py-2 font-mono text-sm text-slate-200">
          {hireLog}
        </div>
      )}

      {secretUnlocked && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="neon-card rounded-xl p-6 max-w-xl w-full">
            <h3 className="text-2xl neon-title">Secret Mini Game Unlocked</h3>
            <p className="text-slate-300 mt-2">
              You found the hidden screen. Try this quick challenge: identify the slowest stage in your pipeline and one optimization for it before your next deploy.
            </p>
            <div className="mt-4 neon-panel rounded-lg p-4">
              <p className="text-slate-200 font-mono text-sm">Hint: Start with skew checks, shuffle metrics, and partition balance.</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="neon-button-secondary rounded-lg px-4 py-2" onClick={() => setSecretUnlocked(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-500/25 bg-[#111720]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-300" data-testid="footer-text">
              © {currentYear} Pratik Patra. Built for clean data, reliable pipelines, and scalable systems.
            </p>
            <p className="text-slate-500 text-sm mt-2">Tip: hidden command available in Data Bot terminal input.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
