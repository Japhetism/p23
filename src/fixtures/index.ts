import image61 from "@/assets/images/image61.png";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import { AuthUser, DashboardData } from "@/types";

export const MockAuthUser: AuthUser = {
  fullName: "James Doe",
  email: "jamesdoe@gmail.com",
  profilePix: image61,
};

export const MockDashboardData: DashboardData = {
  leads: {
    total: 4100,
    trend: [
      { month: "jan", value: 55 },
      { month: "feb", value: 70 },
      { month: "mar", value: 40 },
      { month: "apr", value: 85 },
      { month: "may", value: 60 },
      { month: "jun", value: 90 },
      { month: "jul", value: 48 },
      { month: "aug", value: 95 },
      { month: "sep", value: 72 },
      { month: "oct", value: 80 },
      { month: "nov", value: 65 },
      { month: "dec", value: 88 },
    ],
    pipelines: [
      { name: "contracted", value: "30%", color: "#021717" },
      { name: "qualify", value: "57%", color: "#FD46E8" },
    ],
    totalSales: "2,100K",
  },
  revenue: {
    trend: [
      { day: "mon", value: 200 },
      { day: "tue", value: 320 },
      { day: "wed", value: 250 },
      { day: "thu", value: 340 },
      { day: "fri", value: 300 },
      { day: "sat", value: 240 },
      { day: "sun", value: 220 },
    ],
  },
  retentionRate: {
    data: [
      { name: "Completed", value: 70 },
      { name: "Remaining", value: 30 },
    ],
  },
  customers: {
    data: [
      { name: "Customer 3", uv: 75, fill: "#FD46E8" },
      { name: "Customer 2", uv: 60, fill: "#146AFA" },
      { name: "Customer 1", uv: 65, fill: "#021717" },
    ],

    topCustomers: [
      { name: "Lane Wade", role: "E-commerce", pix: image1, color: "#B190B6" },
      { name: "Lane Wade", role: "E-commerce", pix: image2, color: "#F05831" },
    ],
  },
  tasks: {
    data: [
      { name: "Task Completed", value: "70%" },
      { name: "Better than previous month", value: "30%" },
    ],
    meetings: [
      { name: "Lane Wade", role: "E-commerce", pix: image61, color: "#9099B6" },
      { name: "Lane Wade", role: "E-commerce", pix: image3, color: "#DC9325" },
    ],
  },
  insight: {
    name: "Promising Customer",
    score: 4.5,
    totalScore: 5.0,
  },
};
