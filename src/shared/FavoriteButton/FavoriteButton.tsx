import styles from "./FavoriteButton.module.scss";
import heartIcon from "../../static/ItemCard/Button-Heart.svg";
import heartIconActive from "../../static/ItemCard/Button-Heart-Active.svg";
import React, {useCallback} from "react";
import {ProductShorted} from "../../types/Product";
import {useDispatch} from "react-redux";
import {add, remove, wishlistSelector} from "../../app/store/slices/wishlist.slice";
import { useAppSelector } from "../../app/store/hooks";
import classNames from "classnames";

export const FavoriteButton: React.FC<{ product: ProductShorted }> = ({ product }) => {
  const dispatcher = useDispatch();
  const { items } = useAppSelector(wishlistSelector);

  const isRemoveButton = items.find(item => item.id === product.id);

  const handleClick = useCallback(() => {
    if (isRemoveButton) {
      dispatcher(remove({ id: product.id }));
    } else {
      dispatcher(add({ item: product }));
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
    >
      <img src={isRemoveButton ? heartIconActive : heartIcon} alt="heart icon" />
    </button>
  );
};
