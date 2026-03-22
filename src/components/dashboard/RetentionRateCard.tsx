import { ChartData } from "@/types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type RetentionRateCardProps = {
  data: ChartData[];
};

const RetentionRateCard = ({ data }: RetentionRateCardProps) => {
  return (
    <div className="bg-[#F9FFFF] rounded-2xl p-5 border border-border shadow-md relative pl-20 pr-10">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="text-[14px] font-medium text-[#34373C]">
          Retention Rate
        </h3>
        <select className="text-[9px] text-white bg-[#5E5D5D] px-2 py-1 rounded-[3px] border-none outline-none cursor-pointer">
          <option>Weekly</option>
        </select>
      </div>

      {/* Chart container */}
      <div
        className="relative w-full flex justify-center"
        style={{ height: 180 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Gradient */}
            <defs>
              <linearGradient
                id="halfPieGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="35.51%" stopColor="#021717" />
                <stop offset="71.36%" stopColor="#DFF4F5" />
              </linearGradient>
            </defs>

            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              stroke="white" // border color between slices
              strokeWidth={2} // thickness of the border
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={index === 0 ? "url(#halfPieGradient)" : "#E5E5E5"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[36px] text-[#34373C] font-bold">58%</span>
        </div>
      </div>
    </div>
  );
};

export default RetentionRateCard;
