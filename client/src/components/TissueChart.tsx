import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TissueChartProps {
  primary: number;
  secondary: number;
  primaryLabel: string;
  secondaryLabel: string;
}

export default function TissueChart({
  primary,
  secondary,
  primaryLabel,
  secondaryLabel,
}: TissueChartProps) {
  const [animatedPrimary, setAnimatedPrimary] = useState(0);
  const [animatedSecondary, setAnimatedSecondary] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPrimary(primary);
      setAnimatedSecondary(secondary);
    }, 500);
    return () => clearTimeout(timer);
  }, [primary, secondary]);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const primaryOffset = circumference - (animatedPrimary / 100) * circumference;
  const secondaryOffset =
    circumference - (animatedSecondary / 100) * circumference;

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          className="text-secondary"
        />

        {/* Secondary tissue */}
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={secondaryOffset}
          strokeLinecap="round"
          className="text-blue-400"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: secondaryOffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Primary tissue */}
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={primaryOffset}
          strokeLinecap="round"
          className="text-blue-500"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: primaryOffset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-3xl font-bold">{primary}%</p>
          <p className="text-xs text-muted-foreground">{primaryLabel}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span>{primaryLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400" />
          <span>{secondaryLabel}</span>
        </div>
      </div>
    </div>
  );
}

