import { capitalize } from "@/utils";
import { Pipeline } from "@/types";

type LeadsPipelineCardProps = {
  data: Pipeline[];
};

const LeadsPipelineCard = ({ data }: LeadsPipelineCardProps) => (
  <section
    className="bg-[#F9FFFF] rounded-2xl p-5 border border-border shadow-md lg:pl-20 lg:pr-10"
    aria-labelledby="leads-pipeline-title"
  >
    <div className="flex items-center justify-between mb-4">
      <h3
        id="leads-pipeline-title"
        className="text-[14px] font-medium text-[#34373C]"
      >
        Leads Pipeline
      </h3>
      <button
        className="text-[9px] bg-[#5E5D5D] text-dashboard-dark-fg px-2 py-1 rounded-[3px] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        aria-label={`View details for Leads Pipeline`}
      >
        View
      </button>
    </div>

    <div
      className="flex items-center gap-1"
      role="group"
      aria-label="Pipeline metrics"
    >
      {data.map((item: Pipeline, index: number) => {
        const numericValue = parseFloat(item.value);

        return (
          <div key={index} className="flex flex-col gap-1 items-start">
            <span
              aria-hidden="true"
              className="text-[9px] text-white px-2 py-1 rounded-[3px] font-medium"
              style={{ background: item.color }}
            >
              {item.value}
            </span>

            <div className="flex flex-col items-center mt-2" aria-hidden="true">
              <div className="w-[8px] h-[8px] rounded-full bg-[#9E9FA1] z-10" />
              <div className="w-[2px] h-[61px] bg-gray-300 -mt-1" />
            </div>

            <div
              role="progressbar"
              aria-valuenow={numericValue}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${capitalize(item.name)} progress: ${item.value}`}
              className="h-[14px] bg-gray-200 rounded-full overflow-hidden"
              style={{ width: index === 0 ? "81px" : "165px" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  background: item.color,
                  width: index === 0 ? "100%" : `${numericValue + 20}%`,
                }}
              />
            </div>

            <span className="text-[10px] text-[#616263] mt-3">
              {capitalize(item.name)}
            </span>
          </div>
        );
      })}
    </div>
  </section>
);

export default LeadsPipelineCard;
