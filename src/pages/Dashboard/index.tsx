import React from "react";
import TotalLeadsCard from "@/components/dashboard/TotalLeadsCard";
import LeadsPipelineCard from "@/components/dashboard/LeadsPipelineCard";
import TotalSalesCard from "@/components/dashboard/TotalSalesCard";
import RevenueCard from "@/components/dashboard/RevenueCard";
import RetentionRateCard from "@/components/dashboard/RetentionRateCard";
import TopCustomersCard from "@/components/dashboard/TopCustomersCard";
import WeeklyTasksCard from "@/components/dashboard/WeeklyTasksCard";
import useDashboardViewModel from "./viewmodel";

const Dashboard = () => {
  const { leads, revenue, retentionRate, customers, tasks, insight } =
    useDashboardViewModel();

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5">
        <TotalLeadsCard data={leads.trend} total={leads.total} />
        <LeadsPipelineCard data={leads.pipelines} />
        <TotalSalesCard />
      </div>

      <div className="grid grid-cols-3 gap-4 sm:gap-5">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <RevenueCard />
            <RetentionRateCard />
          </div>
          <WeeklyTasksCard />
        </div>

        <div className="flex flex-col gap-4">
          <TopCustomersCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
