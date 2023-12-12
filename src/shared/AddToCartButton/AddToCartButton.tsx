import styles from "./AddToCartButton.module.scss";

export const AddToCartButton = () => {
  return (
    <button type="button" className={styles.NotAdded}>
      <div className={styles.Text}>Add To Cart</div>
    </button>
  );
};
