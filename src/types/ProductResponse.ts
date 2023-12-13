import {ProductShorted} from "./Product";

export type ProductResponse = {
  count: number,
  nextPage: string,
  prevPage: string,
  data: ProductShorted[]
}
