import useSWR from "swr";
import { fetcher } from "../api/fetcher";
import type { Item, PaginatedResponse } from "../features/items/types/Item";
import { ItemList } from "../features/items/components/ItemList";
import { useState } from "react";
    
export const ItemListPage = () => {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, isLoading, error } = useSWR<PaginatedResponse<Item>>(
    "/items",
    fetcher
  );

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p>商品一覧の取得に失敗しました</p>;
  }

  const items = data?.data ?? [];
  
  const displayItems = keyword ? items.filter((item) => item.name.includes(keyword)) : items;
  
  const allcounts = displayItems.length;

  const filterBtn = () => {
    setKeyword(input);
  };

  return (
    <>
      <p>全{allcounts}件</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={filterBtn}>検索する</button>

      <ItemList data={displayItems} />
    </>
  );
};