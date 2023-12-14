import styles from "./FavoriteButton.module.scss";
import heartIcon from "../../static/ItemCard/Button-Heart.svg";

export const FavoriteButton = () => {
  return (
    <button type="button" className={styles.NotFavorite}>
      <img src={heartIcon} alt="heart icon" />
    </button>
  );
};
