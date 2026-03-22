import { ArrowIcon } from "@/assets/svg";

type TotalSalesCardProps = {
  sales: string;
};

const TotalSalesCard = ({ sales }: TotalSalesCardProps) => (
  <section 
    aria-labelledby="total-sales-title"
    className="bg-[#F9FFFF] rounded-2xl p-5 border border-border shadow-md lg:pl-20 lg:pr-10"
  >
    <h3 id="total-sales-title" className="text-[14px] font-medium text-[#34373C]">
      Total Sales
    </h3>
    
    <div 
      className="my-4" 
      aria-label={`Total sales: ${sales} dollars`}
    >
      <span className="text-[50px] text-[#34373C] font-medium" aria-hidden="true">
        {sales ?? 0}
      </span>
      <span className="text-lg text-[#34373C] ml-1" aria-hidden="true">
        $
      </span>
    </div>

    <button 
      className="flex items-center justify-between w-full h-[47px] bg-[#021717] rounded-[40px] px-8 py-2.5 text-sm text-white font-medium mt-auto focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 outline-none transition-all"
      aria-label="View detailed sales chart"
    >
      <span className="text-white text-[10px] font-regular">View Chart</span>
      <ArrowIcon className="w-[14px] h-[14px]" aria-hidden="true" />
    </button>
  </section>
);

export default TotalSalesCard;