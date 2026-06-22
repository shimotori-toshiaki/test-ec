export type Data = {
    id: number;
    name: string;
    price: number;
    image: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    updatedBy: number;
};

export type Pagination = {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
  from: number;
  to: number;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
};

export type ItemResponse = {
    data: Data[];
};