import React from "react";
import styles from "./CategoryCard.module.scss";

type Props = {
  backgroundColor: string,
  image: string;
  title: string;
  amount: number;
};

export const CategoryCard: React.FC<Props> = ({
  backgroundColor,
  image,
  title,
  amount
}) => {
  return (
    <article className={styles["category__product"]}>
      <div className={styles["category__card"]} style={{ backgroundColor: backgroundColor }}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <h4 className={styles["category__product-title"]}>{title}</h4>
      <p className={styles["category__product-description"]}>{`${amount} models`}</p>
    </article>
  );
};
