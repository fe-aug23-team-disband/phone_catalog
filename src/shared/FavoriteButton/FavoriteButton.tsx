import styles from "./FavoriteButton.module.scss";
import heartIcon from "../../static/ItemCard/Button-Heart.svg";
import heartIconActive from "../../static/ItemCard/Button-Heart-Active.svg";
import React, {useCallback} from "react";
import {ProductShorted} from "../../types/Product";
import {useDispatch} from "react-redux";
import {add, remove, wishlistSelector} from "../../app/store/slices/wishlist.slice";
import { useAppSelector } from "../../app/store/hooks";
import classNames from "classnames";

interface Props {
  product?: ProductShorted;
  state?: "loading" | "error";
}

export const FavoriteButton: React.FC<Props> = ({ product, state }) => {
  const dispatcher = useDispatch();
  const { items } = useAppSelector(wishlistSelector);

  const isRemoveButton = (product) ? items.find(item => item.id === product.id) : null;

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
      className={classNames(
        styles.NotFavorite,
        {
          [styles.Favorite]: isRemoveButton,
        }
      )}
      onClick={handleClick}
      disabled={state ? true : false}
    >
      <img src={isRemoveButton ? heartIconActive : heartIcon} alt="heart icon" />
    </button>
  );
};
