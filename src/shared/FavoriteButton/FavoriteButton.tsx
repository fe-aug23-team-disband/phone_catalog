import styles from "./FavoriteButton.module.scss";
import React, {useCallback} from "react";
import {ProductShorted} from "../../types/Product";
import {useDispatch} from "react-redux";
import {add} from "../../app/store/slices/wishlist.slice";

export const FavoriteButton: React.FC<{ product: ProductShorted }> = ({ product }) => {
  const dispatcher = useDispatch();

  const handleClick = useCallback(() => {
    dispatcher(add({ item: product }));
  }, []);

  return (
    <button type="button" className={styles.NotFavorite} onClick={handleClick}>
      <img src="\images\icons\Button-Heart.svg" alt="heart icon" />
    </button>
  );
};
