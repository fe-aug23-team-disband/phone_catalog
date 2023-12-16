import styles from "./AddToCartButton.module.scss";
import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import {add, cartSelector, remove} from "../../app/store/slices/cart.slice";
import {ProductShorted} from "../../types/Product";
import { useAppSelector } from "../../app/store/hooks";

export const AddToCartButton: React.FC<{ product: ProductShorted }> = ({ product }) => {
  const dispatcher = useDispatch();
  const { items } = useAppSelector(cartSelector);
  console.log(items);
  const isRemoveButton = items.find(item => item.item.id === product.id);

  const handleClick = useCallback(() => {
    if (isRemoveButton) {
      dispatcher(remove({ id: product.id}));
    } else {
      dispatcher(add({ item: product }));
    }
  }, [items]);

  return (
    <button type="button" className={styles.NotAdded} onClick={handleClick}>
      {isRemoveButton
        ? <div className={styles.Text}>Added to cart</div>
        : <div className={styles.Text}>Add to cart</div>
      }
    </button>
  );
};
