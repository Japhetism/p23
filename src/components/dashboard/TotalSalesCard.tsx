import { ArrowUpRight } from "lucide-react";

type TotalSalesCardProps = {
  sales: string;
};

const TotalSalesCard = ({ sales }: TotalSalesCardProps) => (
  <div className="bg-[#F9FFFF] rounded-2xl p-5 border border-border shadow-md pl-20 pr-10">
    <h3 className="text-[14px] font-medium text-[#34373C]">Total Sales</h3>
    <div className="my-4">
      <span className="text-[50px] text-[#34373C] font-medium">{sales}</span>
      <span className="text-lg text-[#34373C] ml-1">$</span>
    </div>
    <button className="flex items-center justify-between w-full h-[47px] bg-[#021717] rounded-[40px] px-8 py-2.5 text-sm text-white font-medium mt-auto">
      <span className="text-white text-[10px] font-regular">View Chart</span>
      <ArrowUpRight size={20} />
    </button>
  </div>
);

export default TotalSalesCard;
