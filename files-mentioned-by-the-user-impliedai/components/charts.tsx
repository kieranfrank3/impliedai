import { marketSeries } from "@/lib/data";

export function Sparkline({
  values = marketSeries,
  height = 88
}: {
  values?: number[];
  height?: number;
}) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 320;
      const y = height - ((value - min) / (max - min || 1)) * (height - 16) - 8;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 320 ${height}`} className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2f7ed8" />
          <stop offset="100%" stopColor="#7dccff" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4a9bea" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#4a9bea" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`0,${height} ${points} 320,${height}`} fill="url(#areaGradient)" opacity="0.9" />
      <polyline
        points={points}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="chart-line"
      />
      {values.map((value, index) => {
        if (index % 3 !== 2) return null;
        const x = (index / (values.length - 1)) * 320;
        const y = height - ((value - min) / (max - min || 1)) * (height - 16) - 8;
        return <circle key={index} cx={x} cy={y} r="3" fill="#7dccff" opacity="0.85" />;
      })}
    </svg>
  );
}

export function BarMatrix() {
  const bars = [42, 68, 54, 81, 39, 76, 62, 88, 49, 72, 59, 91];
  return (
    <div className="grid h-48 grid-cols-12 items-end gap-2">
      {bars.map((bar, index) => (
        <div key={index} className="relative overflow-hidden rounded-sm bg-white/[0.035]">
          <div
            className="rounded-sm bg-gradient-to-t from-signal/55 to-cyanline shadow-glow"
            style={{ height: `${bar}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export function ScoreDial({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="#4a9bea"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold">{score}</span>
        <span className="text-[0.62rem] uppercase tracking-[0.22em] text-white/42">OPI</span>
      </div>
    </div>
  );
}
