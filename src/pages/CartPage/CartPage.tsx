import styles from "./CartPage.module.scss";
import { CartItem } from "../../widgets/CartItem/CartItem";
import { Link } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {cartSelector, createOrder} from "../../app/store/slices/cart.slice";
import {useCallback} from "react";

export const CartPage = () => {
  const { items, sum, order } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const countTotalItems = useCallback(() => {
    return items.reduce((acc, {count}) => {
      return acc + count;
    }, 0);
  }, [items]);

  const handleCheckout = useCallback(() => {
    dispatch(createOrder({ items, sum, order }));
  }, []);

  return (
    <>
      <Link to=".." className={styles.button_back}>
        <div className={styles.button_back__icon}></div>
        <p className={styles.button_back__text}>Back</p>
      </Link>
      <div className={styles.cart}>
        <h1 className={styles.cart__title}>Cart</h1>
        <div className={styles.cart__items}>

          {items.map(({ item, count }) => (<CartItem product={item} count={count} key={item.id} />))}

        </div>
        <div className={styles.cart__order}>
          <div className={styles.cart__info}>
            <h2 className={styles.cart__price}>
              { sum }
            </h2>
            <p className={styles.cart__item_count}>
              {`Total for ${countTotalItems()} items`}
            </p>
          </div>

          <div className={styles.cart__line}></div>

          <button
            type="button"
            className={styles.cart__button}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
