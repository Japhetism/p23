import { transformRevenueTrend } from "@/lib/utils";
import { TrendByDay } from "@/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

type RevenueCardProps = {
  data: TrendByDay[];
};

const RevenueCard = ({ data }: RevenueCardProps) => {
  const transformedData = transformRevenueTrend(data);

  // Get the maximum value in the data
  const maxValue = Math.max(...transformedData.map(item => item.v));

  return (
    <div className="bg-card rounded-2xl p-5 border border-border shadow-md pr-10 relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] font-medium text-[#34373C]">Revenue</h3>
        </div>
        <select className="text-[9px] text-white bg-[#5E5D5D] px-1 py-1 rounded-[3px] border-none outline-none cursor-pointer">
          <option>Weekly</option>
        </select>
      </div>

      <div className="h-36 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={transformedData}
            barSize={30}
            barCategoryGap="30%"
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
          >
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(210,10%,50%)" }}
              tickFormatter={(v) => `${v}$`}
              width={35}
              domain={[0, 400]}
              ticks={[100, 200, 300]}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "hsl(210,10%,50%)" }}
            />
            <Bar dataKey="v" radius={[20, 20, 20, 20]}>
              {transformedData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.v === maxValue ? "#021717" : "#F5F5F5"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Max value label */}
        {transformedData.map((entry, i) =>
          entry.v === maxValue ? (
            <div
              key={i}
              className="absolute -top-6 w-8 h-5 px-6 flex items-center justify-center bg-[#F7DCFE] text-[#616263] text-[10px] rounded-[20px]"
              style={{
                top: "5px",
                left: `calc(${(i / transformedData.length) * 100}% + ${
                  30 - (30 / 2)
                }px)`, // centers div on the bar
              }}
            >
              ${entry.v}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default RevenueCard;