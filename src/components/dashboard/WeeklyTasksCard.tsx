import { useState } from "react";
import { Smile, XCircle, Video } from "lucide-react";
import TimeFrameSelection from "../TimeFrameSelection";
import CardEmptyState from "../CardEmptyState";
import { Person } from "@/types";

type WeeklyTasksCardProps = {
  data: {
    name: string;
    value: string;
  }[];
  meetings: Person[];
};

const WeeklyTasksCard = ({ data, meetings }: WeeklyTasksCardProps) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("Daily");

  const hasData = meetings && meetings.length > 0;

  return (
    <section
      aria-labelledby="weekly-tasks-heading"
      className="bg-[#021717] rounded-2xl p-5 text-white shadow-md col-span-1 sm:col-span-2 lg:col-span-2 lg:pl-10 lg:pr-10 h-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3
            id="weekly-tasks-heading"
            className="text-[14px] text-white font-medium mb-16"
          >
            Weekly Tasks
          </h3>
          <div
            className="flex items-end gap-4 sm:gap-6 mb-4"
            role="list"
            aria-label="Task statistics"
          >
            {data.map((item, index) => (
              <div key={index} role="listitem" className="flex flex-col">
                <span className="text-[50px] text-white sm:text-5xl font-medium leading-none">
                  {item.value}
                </span>
                <p className="text-[10px] text-white mt-1 uppercase tracking-wider">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div
            className="flex items-center gap-2 bg-[#F5F5F5] text-[#021717] rounded-[30px] px-3 py-2 text-[10px] w-[258px]"
            role="status"
            aria-live="polite"
          >
            <Smile size={24} aria-hidden="true" />
            <span className="truncate">
              Your work balance this week. Awesome!
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3
              id="meetings-heading"
              className="text-[10px] text-white font-medium"
            >
              Scheduled Meetings
            </h3>

            <TimeFrameSelection
              label="Select timeframe for scheduled meetings"
              value={selectedTimeFrame}
              onChange={(val) => setSelectedTimeFrame(val)}
            />
          </div>
          {hasData ? (
            <ul
              className="flex flex-col gap-3 bg-[#113939] rounded-[20px] p-5 list-none"
              aria-labelledby="meetings-heading"
            >
              {meetings.map((m, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-[#F9FFFF] rounded-[20px] px-4 py-3 shadow-sm"
                >
                  <div
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-sm shrink-0 overflow-hidden"
                    style={{ backgroundColor: m.color }}
                  >
                    <img
                      src={m.pix}
                      alt={`${m.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] text-[#021717] font-semibold truncate">
                      {m.name}
                    </p>
                    <p className="text-[10px] text-[#021717]">{m.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#021717] rounded-full"
                      aria-label={`Cancel meeting with ${m.name}`}
                    >
                      <XCircle size={20} color="#F1CAC4" />
                    </button>
                    <button
                      className="opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#021717] rounded-full"
                      aria-label={`Start video call with ${m.name}`}
                    >
                      <Video size={20} color="#84A9E5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <CardEmptyState
              title="No Meetings Scheduled"
              description="Start by creating your first meeting."
              onAction={() => {}}
              actionLabel="New Meeting"
              className="h-auto bg-transparent p-0"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default WeeklyTasksCard;
