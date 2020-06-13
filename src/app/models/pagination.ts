import { IProduct } from './product';

export interface IPagination {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  itemCount: number;
  data: IProduct[];
}
