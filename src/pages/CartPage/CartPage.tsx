import styles from "./CartPage.module.scss";
import { CartItem } from "../../widgets/CartItem/CartItem";
import { Link } from "react-router-dom";

export const CartPage = () => {
  return (
    <>
      <Link to=".." className={styles.button_back}>
        <div className={styles.button_back__icon}></div>
        <p className={styles.button_back__text}>Back</p>
      </Link>
      <div className={styles.cart}>
        <h1 className={styles.cart__title}>Cart</h1>
        <div className={styles.cart__items}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.cart__order}>
          <div className={styles.cart__info}>
            <h2 className={styles.cart__price}>
              $2657
            </h2>
            <p className={styles.cart__item_count}>
              Total for 3 items
            </p>
          </div>

          <div className={styles.cart__line}></div>

          <button type="button" className={styles.cart__button}>Checkout</button>
        </div>
      </div>
    </>
  );
};
