import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import TimeFrameSelection from "../TimeFrameSelection";
import { transformRevenueTrend } from "@/utils";
import { TrendByDay } from "@/types";

type RevenueCardProps = {
  data: TrendByDay[];
};

const RevenueCard = ({ data }: RevenueCardProps) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("Weekly");
  const transformedData = transformRevenueTrend(data);

  const maxValue = Math.max(...transformedData.map((item) => item.v));
  const barWidth = 30;

  const yAxisTicks = [100, 200, 300];
  const yAxisMin = 0;
  const yAxisMax = 300;

  const chartSummary = `Revenue bar chart for ${selectedTimeFrame}. The highest revenue was $${maxValue}.`;

  const renderMaxLabel = (props: any) => {
    const { x, y, value } = props;
    if (value !== maxValue) return null;

    return (
      <foreignObject
        x={x + barWidth / 2 - 20}
        y={y - 25}
        width={40}
        height={20}
        aria-hidden="true"
      >
        <div className="flex items-center justify-center bg-[#F7DCFE] text-[#616263] text-[10px] rounded-[10px] px-2 py-[1px]">
          ${value}
        </div>
      </foreignObject>
    );
  };

  return (
    <section
      aria-labelledby="revenue-title"
      className="bg-card rounded-2xl p-5 border border-border shadow-md lg:pr-10 h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3
            id="revenue-title"
            className="text-[14px] font-medium text-[#34373C]"
          >
            Revenue
          </h3>
        </div>

        <TimeFrameSelection
          label="Select timeframe for revenue"
          value={selectedTimeFrame}
          onChange={(val) => setSelectedTimeFrame(val)}
        />
      </div>

      <div className="h-36" role="img" aria-label={chartSummary}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={transformedData}
            barSize={barWidth}
            barCategoryGap="30%"
            margin={{ top: 40, right: 0, bottom: 0, left: 0 }}
            aria-hidden="true"
          >
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(210,10%,50%)" }}
              tickFormatter={(v) => `${v}$`}
              width={35}
              domain={[yAxisMin, yAxisMax]}
              ticks={yAxisTicks}
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
              <LabelList content={renderMaxLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default RevenueCard;
