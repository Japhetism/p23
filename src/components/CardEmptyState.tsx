import React from "react";
import { Inbox, Plus } from "lucide-react";

interface CardEmptyStateProps {
  title?: string;
  description?: string;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
}

const CardEmptyState = ({
  title = "No data available",
  description = "There is currently no information to display for this period.",
  onAction,
  actionLabel = "Add Data",
  className,
}: CardEmptyStateProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center h-full min-h-[200px] bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 ${className}`}
    >
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Inbox className="w-6 h-6 text-gray-400" aria-hidden="true" />
      </div>

      <h4 className="text-sm font-semibold text-[#34373C] mb-1">{title}</h4>
      <p className="text-[11px] text-muted-foreground max-w-[200px] mb-5">
        {description}
      </p>

      {onAction && (
        <button
          onClick={onAction}
          className="flex items-center gap-2 px-4 py-2 bg-[#021717] text-white text-[10px] font-medium rounded-full hover:bg-[#032a2a] transition-all shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#021717] outline-none"
        >
          <Plus className="w-3 h-3" />
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default CardEmptyState;
