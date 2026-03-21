import { OutputItem, TrendByMonth } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformTrend = (data: TrendByMonth[]): OutputItem[] => {
  return data.map(item => ({ v: item.value }));
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat().format(value);
}

export const capitalize = (word: string): string => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}