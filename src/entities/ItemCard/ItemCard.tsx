import styles from "./ItemCard.module.scss";
import { FavoriteButton } from "../../shared/FavoriteButton/FavoriteButton";
import { AddToCartButton } from "../../shared/AddToCartButton/AddToCartButton";
import { ProductShorted } from "../../types/Product";

const Specs = ({ category, value }: { category: string; value: string }) => (
  <div className={styles.itemCard__Specs_Container}>
    <div className={styles.itemCard__Specs_Category}>{category}</div>
    <div className={styles.itemCard__Specs_Value}>{value}</div>
  </div>
);

export const ItemCard = ({ phone }: { phone: ProductShorted }) => {
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
        <div className={styles.itemCard__Price_Current}>
          ${phone.priceDiscount}
        </div>

        <div className={styles.itemCard__Price_Full}>${phone.priceRegular}</div>
      </div>

      <div className={styles.itemCard__Specs}>
        <Specs category="Screen" value={phone.screen} />
        <Specs category="Capacity" value={phone.capacity} />
        <Specs category="RAM" value={phone.ram} />
      </div>

      <div className={styles.itemCard__ButtonWrapper}>
        <AddToCartButton />

        <FavoriteButton product={phone} />
      </div>
    </div>
  );
};
