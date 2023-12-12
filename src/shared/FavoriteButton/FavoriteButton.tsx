import styles from "./FavoriteButton.module.scss";

export const FavoriteButton = () => {
  return (
    <button type="button" className={styles.NotFavorite}>
      <img src="\images\icons\Button-Heart.svg" alt="heart icon" />
    </button>
  );
};
