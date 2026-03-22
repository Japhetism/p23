import {
  OutputItem,
  OutputRevenueItem,
  TrendByDay,
  TrendByMonth,
} from "@/types";

export const transformTrend = (data: TrendByMonth[]): OutputItem[] => {
  return data.map((item) => ({ v: item.value }));
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat().format(value);
};

export const capitalize = (word: string): string => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const transformRevenueTrend = (
  data: TrendByDay[],
): OutputRevenueItem[] => {
  return data.map(({ day, value }) => ({
    day: day.charAt(0).toUpperCase() + day.slice(1),
    v: value,
  }));
};
