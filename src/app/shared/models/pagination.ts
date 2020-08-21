import { IProduct } from './product';

export interface IPagination {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  itemCount: number;
  data: IProduct[];
}

export class Pagination implements IPagination {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  itemCount: number;
  data: IProduct[] = [];
}
