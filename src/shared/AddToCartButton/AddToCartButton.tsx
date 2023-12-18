import styles from "./AddToCartButton.module.scss";
import {useDispatch} from "react-redux";
import React, { useState } from "react";
import {add, cartSelector, removeAll} from "../../app/store/slices/cart.slice";
import { ProductShorted} from "../../types/Product";
import { useAppSelector } from "../../app/store/hooks";
import classNames from "classnames";

interface Props {
  product: ProductShorted;
}

export const AddToCartButton: React.FC<Props> = ({ product }) => {
  const dispatcher = useDispatch();
  const { items } = useAppSelector(cartSelector);
  const [isRemoveButton, setIsRemoveButton] = useState(() => {
    return items.find(item => item.item.id === product.id) !== undefined;
  });

  console.log(items);

  const handleClick = () => {
    if (isRemoveButton) {
      dispatcher(removeAll({ id: product.id }));
      setIsRemoveButton(false);
    } else {
      dispatcher(add({ item: product }));
      setIsRemoveButton(true);
    }
  };

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
