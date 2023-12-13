import { PhoneType } from "../../types/PhoneType";
import styles from "./ItemCard.module.scss";
import { FavoriteButton } from "../../shared/FavoriteButton/FavoriteButton";
import { AddToCartButton } from "../../shared/AddToCartButton/AddToCartButton";

export const ItemCard = ({ phone }: { phone: PhoneType}) => {
  return (
    <div className={styles.itemCard}>
      <img
        src={`${phone.image}`}
        alt={phone.name}
        className={styles.itemCard__Image}
      />

      <div className={styles.itemCard__Title}>
        {phone.name}
      </div>

      <div className={styles.itemCard__Price}>
        <div className={styles.itemCard__Price_Current}>{phone.price}</div>

        <div className={styles.itemCard__Price_Full}>{phone.fullPrice}</div>
      </div>

      <div className={styles.itemCard__Specs}>
        <div className={styles.itemCard__Specs_Container}>
          <div className={styles.itemCard__Specs_Category}>Screen</div>

          <div className={styles.itemCard__Specs_Value}>{phone.screen}</div>
        </div>

        <div className={styles.itemCard__Specs_Container}>
          <div className={styles.itemCard__Specs_Category}>Capacity</div>

          <div className={styles.itemCard__Specs_Value}>{phone.capacity}</div>
        </div>

        <div className={styles.itemCard__Specs_Container}>
          <div className={styles.itemCard__Specs_Category}>RAM</div>

          <div className={styles.itemCard__Specs_Value}>{phone.ram}</div>
        </div>
      </div>

      <div className={styles.itemCard__ButtonWrapper}>
        <AddToCartButton />

        <FavoriteButton />
      </div>
    </div>
  );
};
