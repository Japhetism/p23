import { X, Copy, Sparkles, Smile, XCircle, Video } from "lucide-react";
import image3 from "@/assets/images/image3.png";
import image61 from "@/assets/images/image61.png";

const meetings = [
  { name: "Lane Wade", role: "E-commerce", pix: image61, color: "#9099B6" },
  { name: "Lane Wade", role: "E-commerce", pix: image3, color: "#DC9325" },
];

const WeeklyTasksCard = () => (
  <div className="bg-[#021717] rounded-2xl p-5 text-white shadow-md col-span-1 sm:col-span-2 lg:col-span-2 pl-10 pr-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <h3 className="text-[14px] text-white font-medium mb-16">
          Weekly Tasks
        </h3>
        <div className="flex items-end gap-4 sm:gap-6 mb-4">
          <div>
            <span className="text-[50px] text-white sm:text-5xl font-medium">
              70%
            </span>
            <p className="text-[10px] text-white mt-1">Task Completed</p>
          </div>
          <div>
            <span className="text-[50px] text-white sm:text-5xl font-medium">
              31%
            </span>
            <p className="text-[10px] text-white mt-1">
              Better than previous month
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#F5F5F5] text-[#021717] rounded-[30px] px-3 py-2 text-[10px] w-[258px]">
          <Smile size={24} />
          <span className="truncate">
            Your work balance this week. Awesome!
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[10px] text-white font-medium">
            Scheduled Meetings
          </h3>
          <select className="text-xs bg-[#5E5D5D] text-dashboard-dark-fg px-1 py-1 rounded-[3px] border-none outline-none">
            <option>Daily</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 bg-[#113939] rounded-[20px] p-5">
          {meetings.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#F9FFFF] rounded-[20px] px-4 py-3"
            >
              <div
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-sm shrink-0"
                style={{ backgroundColor: m.color }}
              >
                <img
                  src={m.pix}
                  alt="image"
                  className="w-full h-full object-cover rounded-full [image-rendering:auto]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] text-[#021717] font-semibold truncate">{m.name}</p>
                <p className="text-[10px] text-[#021717]">{m.role}</p>
              </div>
              <button className="opacity-50 hover:opacity-100">
                <XCircle size={20} color="#F1CAC4" />
              </button>
              <button className="opacity-50 hover:opacity-100">
                <Video size={20} color="#84A9E5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default WeeklyTasksCard;
