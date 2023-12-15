import {Product, ProductShorted} from "../../../../types/Product";

export type CartState = {
  items: {
    item: Product | ProductShorted
    count: number
  }[],
  sum: number
}
