import styles from "./CartItem.module.scss";

import IconRemove from "../../static/CartItem/button-close.svg";
import ButtonIcon from "../../shared/ui/ButtonIcon/ButtonIcon";
import IconPlus from "../../static/CartItem/button-plus.svg";
import IconPlusLight from "../../static/CartItem/button-plus_light.png";
import IconMinus from "../../static/CartItem/button-minus-active.svg";
import IconMinusLight from "../../static/CartItem/button-minus_light.png";
import IconMinusDisabled from "../../static/CartItem/button-minus.svg";
import { Product, ProductShorted } from "../../types/Product";
import { useCallback, useContext, useMemo } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import { add, remove, removeAll } from "../../app/store/slices/cart.slice";
import { ThemeContext } from "../../app/providers/ThemeProvider";
import globalVariables from "../../static/variables";

export const CartItem: React.FC<{
  product: Product | ProductShorted;
  count: number;
}> = ({ product, count }) => {
  const dispatch = useAppDispatch();
  const isRemoveDisabled = useMemo(() => {
    return count === 1;
  }, [count]);

  const { theme } = useContext(ThemeContext);
  const buttonMinusWithThemeDisable =
    theme === globalVariables.themeLight ? IconMinusLight : IconMinusDisabled;
  const buttonMinusWithTheme =
    theme === globalVariables.themeLight ? IconMinusLight : IconMinus;

  const handleRemove = useCallback(() => {
    if (!isRemoveDisabled) {
      dispatch(remove({ id: product.id }));
    }
  }, [isRemoveDisabled]);

  const handleAdd = useCallback(() => {
    dispatch(add({ id: product.id }));
  }, []);

  const handleDelete = useCallback(() => {
    dispatch(removeAll({ id: product.id }));
  }, []);

  return (
    <div className={styles.item}>
      <div className={styles.item__info}>
        <div onClick={handleDelete}>
          <img
            className={`${styles.item__icon} ${styles.item__icon_remove}`}
            src={IconRemove}
            alt="Remove"
          />
        </div>

        <img
          className={styles.item__image_phone}
          src={`${product.image}`}
          alt="Phone"
        />

        <p className={styles.item__name}>{product.name}</p>
      </div>

      <div className={styles.item__values}>
        <div className={styles.item__count}>
          <ButtonIcon
            size="small"
            onClick={handleRemove}
            icon={isRemoveDisabled ? buttonMinusWithThemeDisable : buttonMinusWithTheme}
            isDisabled={isRemoveDisabled}
          />

          <p className={styles.item__amount}>{count}</p>

          <ButtonIcon
            size="small"
            onClick={handleAdd}
            icon={
              theme === globalVariables.themeLight ? IconPlusLight : IconPlus
            }
          />
        </div>

        <h3 className={styles.item__price}>
          {`$${product.priceDiscount || product.priceRegular}`}
        </h3>
      </div>
    </div>
  );
};
