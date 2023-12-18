import {ProductShorted} from "./Product";

export type ProductResponse = {
  total: number,
  onPage: number,
  nextPage: string,
  prevPage: string,
  data: ProductShorted[]
}
