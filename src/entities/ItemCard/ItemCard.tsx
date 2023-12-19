import styles from "./ItemCard.module.scss";
import { FavoriteButton } from "../../shared/FavoriteButton/FavoriteButton";
import { AddToCartButton } from "../../shared/AddToCartButton/AddToCartButton";
import { ProductShorted } from "../../types/Product";
import {Link} from "react-router-dom";
import { scrollToTop } from "../../shared/ScrollToTop/ScrollToTop";
import { getCategory } from "../../shared/utils/getCategory";


const Specs = ({ category, value }: { category: string; value: string }) => (
  <div className={styles.itemCard__Specs_Container}>
    <div className={styles.itemCard__Specs_Category}>{category}</div>
    <div className={styles.itemCard__Specs_Value}>{value}</div>
  </div>
);

export const ItemCard = ({ phone }: { phone: ProductShorted }) => {

  return (
    <div className={styles.itemCard}>
      <Link
        to={`../${getCategory(phone.namespaceId)}/${phone.namespaceId}`}
        className={styles.itemCard__link}
        onClick={scrollToTop}
      >
        <img
          src={`${phone.image}`}
          alt={phone.name}
          className={styles.itemCard__Image}
        />
      </Link>

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
        <AddToCartButton product={phone} />

        <FavoriteButton product={phone} />
      </div>
    </div>
  );
};
