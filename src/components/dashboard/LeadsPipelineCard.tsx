import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

const data = [{ v: 30 }, { v: 55 }, { v: 40 }, { v: 65 }, { v: 50 }, { v: 70 }];

const LeadsPipelineCard = () => (
  <div className="bg-[#F9FFFF] rounded-2xl p-5 border border-border shadow-md pl-20 pr-10">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-[14px] font-medium text-[#34373C]">
        Leads Pipeline
      </h3>
      <button className="text-[9px] bg-[#5E5D5D] text-dashboard-dark-fg px-2 py-1 rounded-[3px]">
        View
      </button>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-1 items-start">
        <span className="text-[9px] text-white bg-[#021717] px-2 py-1 rounded-[3px] font-medium">
          30%
        </span>
        <div className="flex flex-col items-center mt-2">
          {/* Circle */}
          <div className="w-[8px] h-[8px] rounded-full bg-[#9E9FA1] z-10" />

          {/* Vertical line */}
          <div className="w-[2px] h-[61px] bg-gray-300 -mt-1" />
        </div>
        {/* Outer track */}
        <div className="w-[81px] h-2 bg-gray-200 rounded-full overflow-hidden h-[10px]">
          {/* Filled portion */}
          <div className="h-full w-[81px] bg-black rounded-full" />
        </div>
        <span className="text-[10px] text-[#616263] mt-3">Contracted</span>
      </div>
      <div className="flex flex-col gap-1 items-start">
        <span className="text-[9px] text-white bg-[#FD46E8] px-2 py-1 rounded-[3px] font-medium">
          57%
        </span>
        <div className="flex flex-col items-center mt-2">
          {/* Circle */}
          <div className="w-[8px] h-[8px] rounded-full bg-[#9E9FA1] z-10" />

          {/* Vertical line */}
          <div className="w-[2px] h-[61px] bg-gray-300 -mt-1" />
        </div>
        {/* Outer track */}
        <div className="w-[165px] h-2 bg-gray-200 rounded-full overflow-hidden h-[10px]">
          {/* Filled portion */}
          <div className="h-full w-[110px] bg-[#FD46E8] rounded-full" />
        </div>
        <span className="text-[10px] text-[#616263] mt-3">Qualify</span>
      </div>
    </div>
  </div>
);

export default LeadsPipelineCard;
