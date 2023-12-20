import React from "react";
import styles from "./PriceSection.module.scss";
import { Product } from "../../../../types/Product";
import { AddToCartButton } from "../../../../shared/AddToCartButton/AddToCartButton";
import { FavoriteButton } from "../../../../shared/FavoriteButton/FavoriteButton";

type Props = {
  data: Product,
}

export const PriceSection: React.FC<Props> = ({ data }) => {
  const { priceDiscount, priceRegular } = data;

  return (
    <div className={styles.priseSection__container}>
      <div className={styles.priceSection__price}>
        <p className={styles["priceSection__price--new"]}>
          ${priceDiscount}
        </p>

        <p className={styles["priceSection__price--old"]}>
          ${priceRegular}
        </p>
      </div>

      <div className={styles.priceSection__buttons}>
        <AddToCartButton product={data} />
        <FavoriteButton product={data} />
      </div>
    </div>
  );
};
