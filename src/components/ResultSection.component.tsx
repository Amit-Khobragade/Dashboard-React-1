import TestResultsBar from "components/TestResultsBar.component";

interface ResultSectionProps {
  percent: number;
  radius: number;
  className?: string;
  frameSize: number;
  text?: string;
  strokeWidth?: number;
}

const ResultSection = ({ percent, radius, className, frameSize, text, strokeWidth }: ResultSectionProps) => (
  <div className={"flex flex-col duration-200 hover:scale-105 cursor-pointer " + (className ?? "")}>
    <div
      className="relative w-full flex-grow"
      style={{
        width: frameSize + "px",
        height: frameSize + "px",
      }}
    >
      <TestResultsBar
        percent={percent}
        radius={radius}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        frameSize={frameSize}
        strokeWidth={strokeWidth}
      />
      <h3 className="font-dm font-h2 text-accent-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{percent}%</h3>
    </div>
    {text && <h3 className="font-dm font-h2 text-accent-1 text-center pt-4">{text}</h3>}
  </div>
);

export default ResultSection;
