import { MoreHorizontal } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { CustomerChartData, Person } from "@/types";

type TopCustomersCardProps = {
  data: CustomerChartData[];
  topCustomers: Person[];
};

const TopCustomersCard = ({ data, topCustomers }: TopCustomersCardProps) => {
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
    <div className="bg-card rounded-xl p-5 border border-border shadow-md flex flex-col gap-4">
      <div className="flex items-center justify-between pl-20 pr-10">
        <h3 className="text-[14px] font-medium text-[#34373C]">
          Top Customers
        </h3>
        <select className="text-[9px] text-white bg-[#5E5D5D] px-1 py-1 rounded-[3px] border-none outline-none cursor-pointer">
          <option>Weekly</option>
        </select>
      </div>

      <div className="w-full flex justify-center items-center mt-8">
        <div className="w-full h-[250px] relative flex items-center justify-center">
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
              <RadialBar dataKey="uv" cornerRadius={10} background></RadialBar>
            </RadialBarChart>
          </ResponsiveContainer>

          <div className="absolute text-[24px] font-bold text-[#000000]">
            {maxPercentage}%
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {legends.map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-[10px] text-[#000000]">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 pl-5 pr-5">
        {topCustomers.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
              style={{ backgroundColor: c.color }}
            >
              <img
                src={c.pix}
                alt="image"
                className="w-full h-full object-cover rounded-full [image-rendering:auto]"
              />
            </div>
            <div className="flex-1">
              <p className="text-[15px] text-[#34373C] font-semibold">
                {c.name}
              </p>
              <p className="text-[10px] text-[#34373C]">{c.role}</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCustomersCard;
