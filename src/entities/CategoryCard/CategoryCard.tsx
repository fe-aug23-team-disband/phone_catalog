import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CategoryCard.module.scss";

type Props = {
  backgroundColor: string,
  link: string,
  image: string,
  title: string,
  amount: number,
};

export const CategoryCard: React.FC<Props> = ({
  backgroundColor,
  link,
  image,
  title,
  amount
}) => {
  return (
    <NavLink
      to={link}
      className={styles["category__product"]}
    >
      <div className={styles["category__card"]} style={{ backgroundColor: backgroundColor }}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <h4 className={styles["category__product-title"]}>{title}</h4>
      <p className={styles["category__product-description"]}>{`${amount} models`}</p>
    </NavLink>
  );
};
