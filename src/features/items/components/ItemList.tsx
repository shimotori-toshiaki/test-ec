import type { Item } from "../types/Item";

type Props = {
  data: Item[];
};

export const ItemList = ({ data }: Props) => {
  return (
    <div className="w-full max-w-[1000px] grid grid-cols-3 gap-4">
      {data.map((item) => (
        <div
          className="border border-gray-300 p-4 flex gap-6"
          key={item.id}
        >
          <div
            className="h-[120px] w-[120px] shrink-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          
          <div className="flex flex-col gap-2 overflow-hidden w-full">
            <p className="font-bold">{item.name}</p>
            <p className="text-sm overflow-hidden">{item.content}</p>
            <p>{item.price}円</p>
          </div>
        </div>
      ))}
    </div>
  );
};