import TotalLeadsCard from "@/components/dashboard/TotalLeadsCard";
import LeadsPipelineCard from "@/components/dashboard/LeadsPipelineCard";
import TotalSalesCard from "@/components/dashboard/TotalSalesCard";
import RevenueCard from "@/components/dashboard/RevenueCard";
import RetentionRateCard from "@/components/dashboard/RetentionRateCard";
import TopCustomersCard from "@/components/dashboard/TopCustomersCard";
import WeeklyTasksCard from "@/components/dashboard/WeeklyTasksCard";
import useDashboardViewModel from "./viewmodel";

const Dashboard = () => {
  const { leads, revenue, retentionRate, customers, tasks } =
    useDashboardViewModel();

  return (
    <main
      id="main-content"
      className="focus:outline-none"
      aria-label="Executive Dashboard"
    >
      {/* First row: High-level Metrics */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5"
        role="region"
        aria-label="Key Performance Indicators"
      >
        <TotalLeadsCard data={leads.trend} total={leads.total} />
        <LeadsPipelineCard data={leads.pipelines} />
        <TotalSalesCard sales={leads.totalSales} />
      </div>

      {/* Second row: Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* Left column (Analytics & Tasks) */}
        <div className="lg:col-span-2 flex flex-col gap-4 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            <div className="h-full flex flex-col">
              <RevenueCard data={revenue.trend} />
            </div>
            <div className="h-full flex flex-col">
              <RetentionRateCard data={retentionRate.data} />
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <WeeklyTasksCard data={tasks.data} meetings={tasks.meetings} />
          </div>
        </div>

        {/* Right column (Customer Insights) */}
        <div className="flex flex-col gap-4 h-full">
          <TopCustomersCard
            data={customers.data}
            topCustomers={customers.topCustomers}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
