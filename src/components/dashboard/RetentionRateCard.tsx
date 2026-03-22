import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import TimeFrameSelection from "../TimeFrameSelection";
import { ChartData } from "@/types";

type RetentionRateCardProps = {
  data: ChartData[];
};

const RetentionRateCard = ({ data }: RetentionRateCardProps) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("Weekly");

  const completed = data[0]?.value || 0;
  const remaining = data[1]?.value || 100 - completed;
  const remainingValue = data.find((d) => d.name === "Remaining")?.value || 0;

  const pieData = [
    { name: "completed", value: completed },
    { name: "divider", value: 1 },
    { name: "remaining", value: remaining },
  ];

  return (
    <section
      className="bg-[#F9FFFF] rounded-2xl p-5 border border-border shadow-md relative lg:pl-20 lg:pr-10 h-full"
      aria-labelledby="retention-title"
    >
      <div className="flex items-center justify-between w-full mb-4">
        <h3
          id="retention-title"
          className="text-[14px] font-medium text-[#34373C]"
        >
          Retention Rate
        </h3>

        <TimeFrameSelection
          label="Select timeframe for rentention rate"
          value={selectedTimeFrame}
          onChange={(val) => setSelectedTimeFrame(val)}
        />
      </div>

      <div
        className="relative w-full flex justify-center"
        style={{ height: 180, overflow: "visible" }}
        role="img"
        aria-label={`Retention rate gauge showing ${remainingValue}% for the ${selectedTimeFrame} period.`}
      >
        <div className="w-full h-full" aria-hidden="true">
          <ResponsiveContainer width="80%" height="120%">
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
                isAnimationActive={false}
              >
                {pieData.map((entry, index) => {
                  if (entry.name === "completed")
                    return <Cell key={index} fill="url(#halfPieGradient)" />;
                  if (entry.name === "divider")
                    return <Cell key={index} fill="#000" />;
                  return <Cell key={index} fill="#E9ECF1" />;
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <span className="text-[36px] text-[#34373C] font-bold">
            {remainingValue}
          </span>
        </div>
      </div>
    </section>
  );
};

export default RetentionRateCard;
