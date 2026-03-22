import { ChartData } from "@/types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type RetentionRateCardProps = {
  data: ChartData[];
};

const RetentionRateCard = ({ data }: RetentionRateCardProps) => {
  const completed = data[0]?.value || 0;
  const remaining = data[1]?.value || 100 - completed;

  const pieData = [
    { name: "completed", value: completed },
    { name: "divider", value: 1 },
    { name: "remaining", value: remaining },
  ];

  const remainingValue = data.find(d => d.name === "Remaining")?.value;

  return (
    <div className="bg-[#F9FFFF] rounded-2xl p-5 border border-border shadow-md relative pl-20 pr-10">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="text-[14px] font-medium text-[#34373C]">
          Retention Rate
        </h3>
        <select className="text-[9px] text-white bg-[#5E5D5D] px-2 py-1 rounded-[3px] border-none outline-none cursor-pointer">
          <option>Weekly</option>
        </select>
      </div>

      <div
        className="relative w-full flex justify-center"
        style={{ height: 180, overflow: "visible" }}
      >
        <ResponsiveContainer width="120%" height="120%">
          <PieChart>
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
              data={pieData}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={105}
              dataKey="value"
              stroke="none"
            >
              {pieData.map((entry, index) => {
                if (entry.name === "completed") return <Cell key={index} fill="url(#halfPieGradient)" />;
                if (entry.name === "divider") return <Cell key={index} fill="#000" />;
                return <Cell key={index} fill="#E9ECF1" />;
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[36px] text-[#34373C] font-bold">{remainingValue}</span>
        </div>
      </div>
    </div>
  );
};

export default RetentionRateCard;