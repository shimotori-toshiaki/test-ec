export type Item = {
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
  from: number;
  lastPage: number;
  lastPageUrl: string;
  nextPageUrl: string | null;
  path: string;
  perPage: number;
  prevPageUrl: string | null;
  to: number;
  total: number;
};

export type PaginatedResponse<T> = Pagination & {
    data: T[];
};