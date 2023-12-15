import {Product, ProductShorted} from "../../../../types/Product";

export type WishlistState = {
  items: (Product | ProductShorted)[],
}
