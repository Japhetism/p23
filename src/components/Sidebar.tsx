import { useState } from "react";
import {
  LayoutGrid,
  Users,
  FolderKanban,
  CalendarCheck,
  X,
} from "lucide-react";
import { MockDashboardData } from "@/fixtures";
import CustomerMetric from "./CustomerMetric";

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

        <div className="mt-auto mb-10">
          <CustomerMetric insight={insight} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
