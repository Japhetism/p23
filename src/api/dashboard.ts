import { http } from "./http";
import { MockDashboardData } from "@/fixtures";

export const DashboardApi = {
  // Currently fetching from mock, but structured for a real endpoint
  getStats: async () => {
    // In a real app: return http.get("/dashboard/stats");
    // Simulate the fetch behavior with Mock Data
    return new Promise<typeof MockDashboardData>((resolve) => {
      setTimeout(() => resolve(MockDashboardData), 1200);
    });
  },
};