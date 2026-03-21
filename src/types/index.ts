export type TrendByMonth = {
  month: string;
  value: number;
};

export type TrendByDay = {
  day: string;
  value: number;
};

export type Pipeline = {
  name: string;
  value: string;
  color: string;
};

export type ChartData = {
  name: string;
  value: number;
};

export type CustomerChartData = {
  name: string;
  uv: number;
  fill: string;
};

export type Person = {
  name: string;
  role: string;
  pix: string;
  color: string;
};

export type AuthUser = {
  fullName: string;
  email: string;
  profilePix: string;
};

export type DashboardData = {
  leads: {
    total: number;
    trend: TrendByMonth[];
    pipelines: Pipeline[];
    totalSales: string;
  };
  revenue: {
    trend: TrendByDay[];
  };
  retentionRate: {
    data: ChartData[];
  };
  customers: {
    data: CustomerChartData[];
    topCustomers: Person[];
  };
  tasks: {
    data: {
      name: string;
      value: string;
    }[];
    meetings: Person[];
  };
  insight: {
    name: string;
    score: number;
    totalScore: number;
  }
};

export type OutputItem = {
  v: number;
};