import styles from "./CartItem.module.scss";

import IconRemove from "../../static/CartItem/button-close.svg";
// import ImagePhone from "../../static/CartItem/phone.jpg";
import ButtonIcon from "../../shared/ButtonIcon/ButtonIcon";
import IconPlus from "../../static/CartItem/button-plus.svg";
import IconMinus from "../../static/CartItem/button-minus-active.svg";
import IconMinusDisabled from "../../static/CartItem/button-minus.svg";
import {Product, ProductShorted} from "../../types/Product";
import {useCallback, useMemo} from "react";
import {useAppDispatch} from "../../app/store/hooks";
import { add, remove, removeAll } from "../../app/store/slices/cart.slice";

export const CartItem: React.FC<{ product: Product | ProductShorted, count: number }> = ({ product, count }) => {
  const dispatch = useAppDispatch();
  const isRemoveDisabled = useMemo(() => {
    return count === 1;
  }, [count]);

  const handleRemove = useCallback(() => {
    dispatch(remove({ id: product.id }));
  }, []);

  const handleAdd = useCallback(() => {
    dispatch(add({ id: product.id }));
  }, []);

  const handleDelete = useCallback(() => {
    dispatch(removeAll({ id: product.id }));
  }, []);

  return (
    <div className={styles.item}>
      <div className={styles.item__info}>
        <a href="#" onClick={handleDelete}>
          <img className={`${styles.item__icon} ${styles.item__icon_remove}`} src={IconRemove} alt="Remove" />
        </a>

        <img className={styles.item__image_phone} src={`data:image/png;base64, ${product.image}`} alt="Phone" />

        <p className={styles.item__name}>
          {product.name}
        </p>
      </div>

      <div className={styles.item__values}>
        <div className={styles.item__count}>
          <ButtonIcon
            size="small"
            onClick={handleRemove}
            icon={isRemoveDisabled ? IconMinusDisabled : IconMinus}
          />

          <p className={styles.item__amount}>{count}</p>

          <ButtonIcon
            size="small"
            onClick={handleAdd}
            icon={IconPlus}
          />
        </div>

        <h3 className={styles.item__price}>
          {`$${product.priceDiscount || product.priceRegular}`}
        </h3>
      </div>
    </div>
  );
};
