import { useAppSelector } from "../../app/store/hooks";
import { wishlistSelector } from "../../app/store/slices/wishlist.slice";
import { ItemCard } from "../../entities/ItemCard/ItemCard";
import styles from "./FavouritesPage.module.scss";
import EmptyImage from "../../static/FavouritesPage/empty-icon.svg";
import { EmptyPageButton } from "../../shared/ui/EmptyPageButton/EmptyPageButton";

export const FavouritesPage = () => {
  const { items } = useAppSelector(wishlistSelector);

  return (
    <>
      <h1 className={styles.heading}>
        Favourites
      </h1>

      {items.length === 0
        ? (
          <div className={styles.empty}>
            <h1 className={styles.empty__description}>
              Your favourites list is currently empty
            </h1>
            <img
              className={styles.empty__image}
              src={EmptyImage}
              alt="EmptyFavourites"
            />
            <EmptyPageButton page="favorites" />
          </div>
        ) : (
          <div className={styles.container}>
            {items.map(item => <ItemCard key={item.id} phone={item} />)}
          </div>
        )
      }
    </>
  );
};
