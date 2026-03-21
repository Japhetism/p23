import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/Header";
import TotalLeadsCard from "@/components/dashboard/TotalLeadsCard";
import LeadsPipelineCard from "@/components/dashboard/LeadsPipelineCard";
import TotalSalesCard from "@/components/dashboard/TotalSalesCard";
import RevenueCard from "@/components/dashboard/RevenueCard";
import RetentionRateCard from "@/components/dashboard/RetentionRateCard";
import TopCustomersCard from "@/components/dashboard/TopCustomersCard";
import WeeklyTasksCard from "@/components/dashboard/WeeklyTasksCard";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background pr-20">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 p-14">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        {/* First row: three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5">
          <TotalLeadsCard />
          <LeadsPipelineCard />
          <TotalSalesCard />
        </div>

        {/* Second row: custom two-column layout */}
        <div className="grid grid-cols-3 gap-4 sm:gap-5">
          {/* First column: spans 2 cols */}
          <div className="col-span-2 flex flex-col gap-4">
            {/* Row 1 inside first column */}
            <div className="grid grid-cols-2 gap-4">
              <RevenueCard />
              <RetentionRateCard />
            </div>
            {/* Row 2 inside first column */}
            <WeeklyTasksCard />
          </div>

          {/* Second column: spans 1 col */}
          <div className="flex flex-col gap-4">
            <TopCustomersCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;