import styles from "../ItemCard.module.scss";

export const ItemCardSpecs = ({ category, value }: { category: string; value: string }) => (
  <div className={styles.itemCard__Specs_Container}>
    <div className={styles.itemCard__Specs_Category}>{category}</div>
    <div className={styles.itemCard__Specs_Value}>{value}</div>
  </div>
);
