import styles from "./ItemCard.module.scss";
import { FavoriteButton } from "../../shared/ui/FavoriteButton/FavoriteButton";
import { AddToCartButton } from "../../shared/ui/AddToCartButton/AddToCartButton";
import { ProductShorted } from "../../types/Product";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../shared/utils/ScrollToTop";
import { getCategory } from "../../shared/utils/getCategory";
import { ItemCardSpecs } from "./ItemCardSpecs/ItemCardSpecs";

export const ItemCard = ({ phone }: { phone: ProductShorted }) => {

  return (
    <div className={styles.itemCard}>
      <Link
        to={`../${getCategory(phone.namespaceId)}/${phone.namespaceId}`}
        className={styles.itemCard__link}
        onClick={() => scrollToTop()}
        draggable="false"
      />

      <img
        src={`${phone.image}`}
        alt={phone.name}
        className={styles.itemCard__Image}
      />

      <div className={styles.itemCard__Title}>
        <p className={styles.itemCard__Title_Text}>{phone.name}</p>
      </div>

      <div className={styles.itemCard__Price}>
        <p className={styles.itemCard__Price_Current}>
          ${phone.priceDiscount}
        </p>

        <p className={styles.itemCard__Price_Full}>${phone.priceRegular}</p>
      </div>

      <div className={styles.itemCard__divider}></div>

      <div className={styles.itemCard__Specs}>
        <ItemCardSpecs category="Screen" value={phone.screen} />
        <ItemCardSpecs category="Capacity" value={phone.capacity} />
        <ItemCardSpecs category="RAM" value={phone.ram} />

      </div>
      <div className={styles.itemCard__ButtonWrapper}>
        <AddToCartButton product={phone} />

        <FavoriteButton product={phone} />
      </div>
    </div>
  );
};
