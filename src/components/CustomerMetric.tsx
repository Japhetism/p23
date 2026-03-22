import { ChevronRight } from "lucide-react";
import { Insight } from "@/types";

type CustomerMetricProps = {
  insight: Insight;
};

const CustomerMetric = ({ insight }: CustomerMetricProps) => {
  const percentage = insight.totalScore
    ? (insight.score / insight.totalScore) * 100 - 12
    : 0;

  const gradient = `conic-gradient(
    from 25deg at 50% 50%, 
    #FD6046 ${percentage}%, 
    #FFFFFF ${percentage}%
  )`;

  return (
    <div className="bg-card rounded-xl p-4 text-card-foreground hidden lg:block h-[279px]">
      <div className="flex items-center justify-between mb-1">
        <div>
          <p className="text-[14px] text-[#34373C] font-medium">
            Customer metric
          </p>
          <p className="text-[10px] text-[#616263] font-regular text-muted-foreground">
            Overall Insight
          </p>
        </div>
        <ChevronRight className="text-[#34373C]" size={24} />
      </div>

      <div className="flex items-center justify-center mt-8">
        <div
          className="relative w-[149px] h-[149px] rounded-full p-[2px] flex items-center justify-center"
          style={{ background: gradient }}
        >
          <div className="absolute left-3.5 top-8 -translate-y-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#FD6046]" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7px] text-[#616263] font-medium">
            {insight.score.toFixed(1)}/{insight.totalScore.toFixed(1)}
          </div>

          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <div className="w-[117px] h-[117px] rounded-full p-[3px] bg-[linear-gradient(180deg,#F6F6F6_0%,#38696B_100%)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={insight.pix}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-[#616263] text-center font-medium mt-2">
        {insight.name}
      </p>
    </div>
  );
};

export default CustomerMetric;
