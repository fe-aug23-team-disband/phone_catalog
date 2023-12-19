import styles from "./FavoriteButton.module.scss";
import heartIcon from "../../static/ItemCard/Button-Heart.svg";
import heartIconActive from "../../static/ItemCard/Button-Heart-Active.svg";
import React, { useEffect, useState} from "react";
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
  const [isRemoveButton, setIsRemoveButton] = useState<boolean>(() => {
    return items.find(item => item.id === product?.id) !== undefined;
  });

  useEffect(() => {
    setIsRemoveButton(items.find(item => item.id === product?.id) !== undefined);
  }, [state, product, items]);

  const handleClick = () => {
    if (product) {
      if (isRemoveButton) {
        dispatcher(remove({ id: product.id }));
      } else {
        dispatcher(add({ item: product }));
      }
    }
  };

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
