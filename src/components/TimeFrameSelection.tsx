import React from "react";
import { TIMEFRAMES } from "@/constants";

interface TimeFrameSelectionProps {
  label?: string;
  value: string;
  className?: string;
  onChange: (value: string) => void;
}

const TimeFrameSelection = ({ label, value, className, onChange, ...props }: TimeFrameSelectionProps) => {
  const uniqueId = React.useId();

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={uniqueId} className="sr-only">
          {label}
        </label>
      )}
      <select
        id={uniqueId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          text-[9px] text-white bg-[#5E5D5D] 
          px-2 py-1 rounded-[3px] 
          border-none outline-none cursor-pointer 
          focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
          ${className}
        `}
        {...props}
      >
        {TIMEFRAMES.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeFrameSelection;