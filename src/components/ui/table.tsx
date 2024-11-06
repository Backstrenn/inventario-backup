import * as React from "react";
import { cn } from "@/lib/utils";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  head: React.ReactNode; 
}

const Table: React.FC<TableProps> = ({ className, head, children, ...props }) => {
  return (
    <table className={cn("min-w-full border border-gray-300 rounded-lg shadow-md overflow-hidden", className)} {...props}>
      <thead className="bg-blue-50 text-blue-900 font-semibold">
        <tr>{head}</tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {children}
      </tbody>
    </table>
  );
};

export default Table;
