import { useEffect, useState } from "react";

const LiveClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  const date = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(now);

  return (
    <div className="futuristic-pill rounded-xl px-4 py-3 text-left">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Local Time</p>
      <p className="font-mono text-lg text-slate-800">{time}</p>
      <p className="text-xs text-slate-500">{date}</p>
    </div>
  );
};

export default LiveClock;
