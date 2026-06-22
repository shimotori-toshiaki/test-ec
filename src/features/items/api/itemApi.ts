import { apiClient } from "../../../api/client";
import type { ItemResponse } from "../types/ItemList";

export const getItems = async (url: string): Promise<ItemResponse> => {
    const res = await apiClient.get<ItemResponse>(url);
    return res.data;
};