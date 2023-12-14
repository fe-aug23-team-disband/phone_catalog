import styles from "./ItemCard.module.scss";
import { FavoriteButton } from "../../shared/FavoriteButton/FavoriteButton";
import { AddToCartButton } from "../../shared/AddToCartButton/AddToCartButton";
import {ProductShorted} from "../../types/Product";

export const ItemCard = ({ phone }: { phone: ProductShorted}) => {
  return (
    <div className={styles.itemCard}>
      <img
        src={`data:image/png;base64, ${phone.image}`}
        alt={phone.name}
        className={styles.itemCard__Image}
      />

      <div className={styles.itemCard__Title}>
        <div className={styles.itemCard__Title_Text}>{phone.name}</div>
      </div>

      <div className={styles.itemCard__Price}>
        <div className={styles.itemCard__Price_Current}>${phone.priceDiscount}</div>

        <div className={styles.itemCard__Price_Full}>${phone.priceRegular}</div>
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
