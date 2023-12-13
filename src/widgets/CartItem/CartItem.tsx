import styles from "./CartItem.module.scss";

import IconRemove from "../../static/CartItem/button-close.svg";
import ImagePhone from "../../static/CartItem/phone.jpg";

export const CartItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__info}>
        <a href="#">
          <img className={`${styles.item__icon} ${styles.item__icon_remove}`} src={IconRemove} alt="Remove" />
        </a>

        <img className={styles.item__image_phone} src={ImagePhone} alt="Phone" />

        <p className={styles.item__name}>
          Apple iPhone 11 Pro 128GB Red (MQ023)
        </p>
      </div>

      <div className={styles.item__values}>
        <div className={styles.item__count}>
          <a className={styles.item__button} href="#">
            <div className={`${styles.item__icon} ${styles.item__icon_minus}`} />
          </a>
          <p className={styles.item__amount}>1</p>
          <a className={styles.item__button} href="#">
            <div className={`${styles.item__icon} ${styles.item__icon_plus}`} />
          </a>
        </div>

        <h3 className={styles.item__price}>
          $1099
        </h3>
      </div>
    </div>
  );
};
