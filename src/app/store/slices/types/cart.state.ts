import {Product, ProductShorted} from "../../../../types/Product";
import {ActionState} from "../../../../types/ActionState";

export type CartState = {
  order: {
    id: string | null,
    status: ActionState
  }
  items: {
    item: Product | ProductShorted
    count: number
  }[],
  sum: number
}
