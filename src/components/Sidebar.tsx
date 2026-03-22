import { useState } from "react";
import {
  LayoutGrid,
  Users,
  FolderKanban,
  CalendarCheck,
  X,
  ChevronRight,
} from "lucide-react";
import image117 from "@/assets/images/image117.png";
import { MockDashboardData } from "@/fixtures";

const navItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  {
    icon: Users,
    label: "CRM",
    children: [
      { label: "Project" },
      { label: "Attendance" },
      { label: "Users" },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const [crmOpen, setCrmOpen] = useState(true);

  const insight = MockDashboardData.insight;

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
        fixed lg:static z-50 top-0 left-0 h-full lg:h-auto
        w-[267px] min-h-screen bg-[#021717] flex flex-col py-6 px-4
        transform transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex items-center justify-center mt-10 mb-10 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-[27px] h-[27px] rounded-full bg-white" />
            <span className="text-[24px] font-semibold text-sidebar-active-fg">
              Logo
            </span>
          </div>
          <button className="lg:hidden text-sidebar-fg" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => item.children && setCrmOpen(!crmOpen)}
                className={`flex items-center gap-3 w-full px-8 py-2.5 rounded-lg text-[16px] font-medium transition-colors ${
                  item.active
                    ? "bg-[#356364] text-white rounded-[20px]"
                    : "hover:bg-sidebar-active/10 text-sidebar-fg"
                }`}
              >
                <item.icon size={24} />
                {item.label}
              </button>
              {item.children && (
                <div className="bg-[#6E8788] border border-b-[1px] h-[0.1px] border-[#6E8788] mt-2 mb-2" />
              )}
              {item.children && crmOpen && (
                <div className="ml-16 mt-1 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      className="flex items-center gap-2 px-3 py-2 text-[12px] text-sidebar-fg hover:text-sidebar-active-fg transition-colors rounded-md"
                    >
                      {child.label === "Project" && <FolderKanban size={20} />}
                      {child.label === "Attendance" && (
                        <CalendarCheck size={20} />
                      )}
                      {child.label === "Users" && <Users size={20} />}
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto bg-card rounded-xl p-4 text-card-foreground hidden lg:block h-[279px] mb-10">
          <div className="flex items-center justify-between mb-1">
            <div>
              <p className="text-[14px] text-[#34373C] font-medium">
                Customer metric
              </p>
              <p className="text-[10px] text-[#616263] font-regular text-muted-foreground">
                Overall Insight
              </p>
            </div>
            {/* <span className="text-muted-foreground">›</span> */}
            <ChevronRight className="text-[#34373C]" size={24} />
          </div>
          <div className="flex items-center justify-center mt-8">
            <div className="relative w-[149px] h-[149px] rounded-full p-[2px] bg-[conic-gradient(from_25deg_at_50%_50%,#FD6046_21.57%,#FFFFFF_80.46%,#FFFFFF_80.46%)] flex items-center justify-center">
              {/* 🔴 Left dot */}
              <div className="absolute left-3.5 top-8 -translate-y-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#FD6046]" />

              {/* 🔝 Top text */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7px] text-[#616263] font-medium">
                {insight.score}/{insight.totalScore}
              </div>

              {/* Inner circles */}
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-[117px] h-[117px] rounded-full p-[3px] bg-[linear-gradient(180deg,#F6F6F6_0%,#38696B_100%)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={image117}
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
      </aside>
    </>
  );
};

export default Sidebar;
