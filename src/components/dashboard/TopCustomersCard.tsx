import { MoreHorizontal } from "lucide-react";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";

const data = [
  { name: "Customer 3", uv: 75, fill: "#FD46E8" },
  { name: "Customer 2", uv: 60, fill: "#146AFA" },
  { name: "Customer 1", uv: 65, fill: "#021717" },
];

const customers = [
  { name: "Lane Wade", role: "E-commerce", pix: image1, color: "#B190B6" },
  { name: "Lane Wade", role: "E-commerce", pix: image2, color: "#F05831" },
];

const TopCustomersCard = () => (
  <div className="bg-card rounded-xl p-5 border border-border shadow-md flex flex-col gap-4">
    {/* Header */}
    <div className="flex items-center justify-between pl-20 pr-10">
      <h3 className="text-[14px] font-medium text-[#34373C]">Top Customers</h3>
      <select className="text-[9px] text-white bg-[#5E5D5D] px-1 py-1 rounded-[3px] border-none outline-none cursor-pointer">
        <option>Weekly</option>
      </select>
    </div>

    {/* Radial Bar Chart */}
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full h-[250px] relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            barSize={30}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar dataKey="uv" cornerRadius={10} background />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Centered 99% */}
        <div className="absolute text-2xl font-bold text-foreground">
          99%
        </div>
      </div>
    </div>

    {/* Legend */}
    <div className="flex justify-center gap-4">
      {data.reverse().map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: item.fill }}
          />
          <span className="text-[10px] text-[#000000]">{item.name}</span>
        </div>
      ))}
    </div>

    {/* Customer List */}
    <div className="flex flex-col gap-3 pl-5 pr-5">
      {customers.map((c, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: c.color }}>
            <img
            src={c.pix}
            alt="image"
            className="w-full h-full object-cover rounded-full [image-rendering:auto]"
          />
          </div>
          <div className="flex-1">
            <p className="text-[15px] text-[#34373C] font-semibold">{c.name}</p>
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

export default TopCustomersCard;