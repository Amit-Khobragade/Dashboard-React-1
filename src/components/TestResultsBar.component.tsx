import { ReactNode } from "react";

interface Props {
  percent: number;
  radius: number;
  className?: string;
  frameSize: number;
  strokeWidth?: number;
}

function TestResultsBar({ percent, radius, className, frameSize, strokeWidth }: Props): ReactNode {
  const normalizedRadius = radius - 4 * 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference * (percent / 100 - 1);

  return (
    <svg width={frameSize} height={frameSize} className={className}>
      <circle
        stroke="#481D24"
        stroke-width={strokeWidth ?? 6}
        className="duration-300"
        fill="transparent"
        r={normalizedRadius}
        cx={frameSize / 2}
        cy={frameSize / 2}
        strokeDasharray={circumference + " " + circumference}
        style={{
          strokeDashoffset: offset,
        }}
      />
    </svg>
  );
}

export default TestResultsBar;
