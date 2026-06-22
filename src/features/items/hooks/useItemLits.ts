import useSWR from "swr";
import { getItems } from "../api/itemApi";
import type { ItemResponse } from "../types/ItemList";

export const useItemList = () => {
    const { data, isLoading, error } = useSWR<ItemResponse>("/items", getItems);
    const items = data?.data ?? [];
    return {
        data,
        items,
        error,
        isLoading,
    };
};