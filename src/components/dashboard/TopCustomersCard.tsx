import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import TimeFrameSelection from "../TimeFrameSelection";
import { CustomerChartData, Person } from "@/types";

type TopCustomersCardProps = {
  data: CustomerChartData[];
  topCustomers: Person[];
};

const TopCustomersCard = ({ data, topCustomers }: TopCustomersCardProps) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("Weekly");
  const normalizedData = data.map((item) => ({
    ...item,
    uv: Math.min(item.uv, 100),
  }));

  const chartData = [
    ...normalizedData,
    { name: "dummy", uv: 100, fill: "#ffffff" },
  ];

  const maxPercentage = Math.max(...normalizedData.map((d) => d.uv));
  const legends = [...normalizedData].reverse();

  return (
    <section
      aria-labelledby="top-customers-title"
      className="bg-card rounded-xl p-5 border border-border shadow-md flex flex-col gap-4 h-full"
    >
      <div className="flex items-center justify-between lg:pl-20 lg:pr-10">
        <h3
          id="top-customers-title"
          className="text-[14px] font-medium text-[#34373C]"
        >
          Top Customers
        </h3>

        <TimeFrameSelection
          label="Select timeframe for top customers"
          value={selectedTimeFrame}
          onChange={(val) => setSelectedTimeFrame(val)}
        />
      </div>

      <div className="w-full flex justify-center items-center mt-6">
        <div
          className="w-full h-[250px] relative flex items-center justify-center"
          role="img"
          aria-label={`Radial chart showing customer distribution. Peak value is ${maxPercentage}%.`}
        >
          <div className="w-full h-full" aria-hidden="true">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={150}
                barSize={30}
                data={chartData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  dataKey="uv"
                  cornerRadius={10}
                  background
                ></RadialBar>
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <div
            className="absolute text-[24px] font-bold text-[#000000]"
            aria-hidden="true"
          >
            {maxPercentage}%
          </div>
        </div>
      </div>

      {/* Legends */}
      <ul
        className="flex justify-center gap-4 list-none"
        aria-label="Chart legend"
      >
        {legends.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.fill }}
              aria-hidden="true"
            />
            <span className="text-[10px] text-[#000000]">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Customer List */}
      <ul
        className="flex flex-col gap-4 pl-5 pr-5 list-none"
        aria-label="Customer list"
      >
        {topCustomers.map((c, i) => (
          <li
            key={i}
            className="flex items-center gap-3 p-2 rounded-[20px] hover:bg-[#ECECEC] transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-gray-200"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
              style={{ backgroundColor: c.color }}
            >
              <img
                src={c.pix}
                alt={`${c.name}'s profile picture`}
                className="w-full h-full object-cover rounded-full [image-rendering:auto]"
              />
            </div>
            <div className="flex-1">
              <p className="text-[15px] text-[#34373C] font-semibold">
                {c.name}
              </p>
              <p className="text-[10px] text-[#34373C]">{c.role}</p>
            </div>
            <button
              className="text-muted-foreground hover:text-foreground transition-colors p-1 focus:outline-none focus:text-black"
              aria-label={`More options for ${c.name}`}
            >
              <MoreHorizontal size={16} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopCustomersCard;
