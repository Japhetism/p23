import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { formatCurrency, transformTrend } from "@/lib/utils";
import { TrendByMonth } from "@/types";

type TotalLeadsCardsProps = {
  data: TrendByMonth[];
  total: number;
};

const TotalLeadsCard = ({ data, total }: TotalLeadsCardsProps) => {
  const transformedData = transformTrend(data);

  return (
    <div className="bg-card rounded-2xl p-5 border border-border shadow-md pl-20 pr-10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[14px] text-[#34373C] font-medium text-muted-foreground">
          Total Leads
        </h3>
        <button className="text-[9px] bg-[#5E5D5D] text-dashboard-dark-fg px-2 py-1 rounded-[3px]">
          View
        </button>
      </div>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-[50px] text-[#34373C] font-bold text-foreground">
          {formatCurrency(total)}
        </span>
        <span className="text-[15px] text-[#34373C] text-muted-foreground">
          Leads
        </span>
      </div>
      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={transformedData} barSize={15} barCategoryGap="50%">
            <Bar dataKey="v" radius={[20, 20, 20, 20]}>
              {transformedData.map((_, i) => (
                <Cell key={i} fill={i % 2 === 0 ? "#021717" : "#FD46E8"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalLeadsCard;
