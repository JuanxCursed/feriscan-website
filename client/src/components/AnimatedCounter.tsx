import { useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
  className = "",
  duration = 1.5,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(latest.toFixed(decimals));
    });

    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, value, duration, decimals]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}

