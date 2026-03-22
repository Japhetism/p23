import { MockDashboardData } from "@/fixtures";

function useDashboardViewModel() {
  const { leads, revenue, retentionRate, customers, tasks, insight } =
    MockDashboardData;

  return {
    isLoading: true,
    leads,
    revenue,
    retentionRate,
    customers,
    tasks,
    insight,
  };
}

export default useDashboardViewModel;

export type DashboardViewModel = ReturnType<typeof useDashboardViewModel>;
