
import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ options, className, ...props }) => {
  return (
    <select
      className={cn(
        "w-full border border-gray-300 rounded-lg p-3 text-base shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:shadow-md",
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-gray-700">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
