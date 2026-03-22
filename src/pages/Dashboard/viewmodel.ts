import { useState, useEffect } from "react";
import { MockDashboardData } from "@/fixtures";

function useDashboardViewModel() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const { leads, revenue, retentionRate, customers, tasks, insight } =
    MockDashboardData;

  return {
    isLoading,
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
