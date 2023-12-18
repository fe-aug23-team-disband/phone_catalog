import styles from "./AddToCartButton.module.scss";
import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import {add, cartSelector, removeAll} from "../../app/store/slices/cart.slice";
import {ProductShorted} from "../../types/Product";
import { useAppSelector } from "../../app/store/hooks";
import classNames from "classnames";

export const AddToCartButton: React.FC<{ product: ProductShorted }> = ({ product }) => {
  const dispatcher = useDispatch();
  const { items } = useAppSelector(cartSelector);
  const isRemoveButton = items.find(item => item.item.id === product.id);

  const handleClick = useCallback(() => {
    if (isRemoveButton) {
      dispatcher(removeAll({ id: product.id}));
      console.log(items);
    } else {
      dispatcher(add({ item: product }));
    }
  }, [items]);

  return (
    <button
      type="button"
      className={classNames(
        styles.NotAdded,
        {
          [styles.Added]: isRemoveButton,
        }
      )}
      onClick={handleClick}
    >
      {isRemoveButton
        ? <div className={styles.Text}>Added to cart</div>
        : <div className={styles.Text}>Add to cart</div>
      }
    </button>
  );
};
