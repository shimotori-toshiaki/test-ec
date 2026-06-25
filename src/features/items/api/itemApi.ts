import { apiClient } from "../../../api/client";
import type { Item, PaginatedResponse } from "../types/Item";

export const getItems = async (url: string): Promise<PaginatedResponse<Item>> => {
  const res = await apiClient.get<PaginatedResponse<Item>>(url);
  return res.data;
};