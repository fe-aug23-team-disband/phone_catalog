import styles from "./AddToCartButton.module.scss";
import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import {add, cartSelector, remove} from "../../app/store/slices/cart.slice";
import {ProductShorted} from "../../types/Product";
import { useAppSelector } from "../../app/store/hooks";
import classNames from "classnames";

interface Props {
  product?: ProductShorted;
  state?: "loading" | "error";
}

export const AddToCartButton: React.FC<Props> = ({ product, state }) => {
  const dispatcher = useDispatch();
  const { items } = useAppSelector(cartSelector);
  const isRemoveButton = (product) ? items.find(item => item.item.id === product.id) : null;

  const handleClick = useCallback(() => {
    if (product) {
      if (isRemoveButton) {
        dispatcher(remove({ id: product.id}));
      } else {
        dispatcher(add({ item: product }));
      }
    }
  }, [items]);

  return (
    <button
      type="button"
      className={classNames(
        styles.NotAdded,
        {
          [styles.Added]: isRemoveButton || state === "error",
        }
      )}
      onClick={handleClick}
      disabled={state ? true : false}
    >
      {product
        ? (isRemoveButton
          ? <div className={styles.Text}>Added to cart</div>
          : <div className={styles.Text}>Add to cart</div>)
        : (state === "loading"
          ? <div className={styles.Text}>Loading</div>
          : <div className={styles.Text}>Error</div>
        )
      }
    </button>
  );
};
