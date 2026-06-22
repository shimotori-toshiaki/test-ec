import { useItemList } from "../hooks/useItemLits";

export const ItemList = () => {
  const { data, error, isLoading } = useItemList();
  if (isLoading) return <p>読み込み中</p>;
  if (error) return <p>商品一覧の取得に失敗しました</p>;
  const items = data?.data ?? [];
  if (items.length === 0) return <p>商品がありません</p>;
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 rounded border border-gray-300 p-4">
            <div
              className="h-24 w-24 rounded bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="flex flex-col justify-between">
              <p className="font-bold">{item.name}</p>
              <p>{item.content}</p>
              <p>{item.price}円</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

