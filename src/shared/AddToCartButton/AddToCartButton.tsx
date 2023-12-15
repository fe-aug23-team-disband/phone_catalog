import styles from "./AddToCartButton.module.scss";
import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import {add} from "../../app/store/slices/cart.slice";
import {ProductShorted} from "../../types/Product";

export const AddToCartButton: React.FC<{ product: ProductShorted }> = ({ product }) => {
  const dispatcher = useDispatch();

  const handleClick = useCallback(() => {
    dispatcher(add({ item: product }));
  }, []);

  return (
    <button type="button" className={styles.NotAdded} onClick={handleClick}>
      <div className={styles.Text}>Add To Cart</div>
    </button>
  );
};
