import styles from "./FavoriteButton.module.scss";
import heartIcon from "../../static/ItemCard/Button-Heart.svg";
import heartIcon_light from "../../static/ItemCard/heartIcon_light.png";
import heartIconActive from "../../static/ItemCard/Button-Heart-Active.svg";
import React, { useCallback, useContext } from "react";
import { ProductShorted } from "../../types/Product";
import { useDispatch } from "react-redux";
import {
  add,
  remove,
  wishlistSelector
} from "../../app/store/slices/wishlist.slice";
import { useAppSelector } from "../../app/store/hooks";
import classNames from "classnames";
import { ThemeContext } from "../../app/providers/ThemeProvider";

interface Props {
  product?: ProductShorted;
  state?: "loading" | "error";
}
export const FavoriteButton: React.FC<Props> = ({ product, state }) => {
  const dispatcher = useDispatch();
  const { items } = useAppSelector(wishlistSelector);

  const isRemoveButton = product
    ? items.find(item => item.id === product.id)
    : null;
  const { theme } = useContext(ThemeContext);

  const handleClick = useCallback(() => {
    if (product) {
      if (isRemoveButton) {
        dispatcher(remove({ id: product.id }));
      } else {
        dispatcher(add({ item: product }));
      }
    }
  }, [items]);

  return (
    <button
      type="button"
      className={classNames(styles.NotFavorite, {
        [styles.Favorite]: isRemoveButton
      })}
      onClick={handleClick}
      disabled={state ? true : false}
    >
      {theme === "light" ? (
        <img
          src={isRemoveButton ? heartIconActive : heartIcon_light}
          alt="heart icon"
        />
      ) : (
        <img
          src={isRemoveButton ? heartIconActive : heartIcon}
          alt="heart icon"
        />
      )}
    </button>
  );
};
