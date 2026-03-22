import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { formatCurrency, transformTrend } from "@/utils";
import { TrendByMonth } from "@/types";

type TotalLeadsCardsProps = {
  data: TrendByMonth[];
  total: number;
};

const TotalLeadsCard = ({ data, total }: TotalLeadsCardsProps) => {
  const transformedData = data ? transformTrend(data) : [];

  return (
    <section 
      aria-labelledby="total-leads-title"
      className="bg-card rounded-2xl p-5 border border-border shadow-md lg:pl-20 lg:pr-10"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 id="total-leads-title" className="text-[14px] text-[#34373C] font-medium text-muted-foreground">
          Total Leads
        </h3>
        <button 
          className="text-[9px] bg-[#5E5D5D] text-dashboard-dark-fg px-2 py-1 rounded-[3px] focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
          aria-label="View detailed lead reports"
        >
          View
        </button>
      </div>

      <div 
        className="flex items-baseline gap-2 mb-3"
        aria-label={`Total leads: ${total}`}
      >
        <span 
          className="text-[50px] text-[#34373C] font-bold text-foreground"
          aria-hidden="true"
        >
          {total ? formatCurrency(total) : 0}
        </span>
        <span 
          className="text-[15px] text-[#34373C] text-muted-foreground"
          aria-hidden="true"
        >
          Leads
        </span>
      </div>

      <div 
        className="h-20"
        role="img"
        aria-label="Bar chart showing lead trends over the recent period."
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={transformedData} 
            barSize={15} 
            barCategoryGap="50%"
            aria-hidden="true"
          >
            <Bar dataKey="v" radius={[20, 20, 20, 20]}>
              {transformedData.map((_, i) => (
                <Cell key={i} fill={i % 2 === 0 ? "#021717" : "#FD46E8"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default TotalLeadsCard;