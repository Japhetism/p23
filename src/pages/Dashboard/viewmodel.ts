import { useQuery } from "@tanstack/react-query";
import { DashboardApi } from "@/api/dashboard";

function useDashboardViewModel() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: DashboardApi.getStats,
    staleTime: 5 * 60 * 1000, 
  });

  return {
    isLoading,
    isError,
    retry: refetch,
    leads: data?.leads,
    revenue: data?.revenue,
    retentionRate: data?.retentionRate,
    customers: data?.customers,
    tasks: data?.tasks,
    insight: data?.insight,
  };
}

export default useDashboardViewModel;