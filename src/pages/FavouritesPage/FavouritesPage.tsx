import {useAppSelector} from "../../app/store/hooks";
import {wishlistSelector} from "../../app/store/slices/wishlist.slice";
import { ItemCard } from "../../entities/ItemCard/ItemCard";
import styles from "./FavouritesPage.module.scss";

export const FavouritesPage = () => {
  const { items } = useAppSelector(wishlistSelector);
  console.log(items);

  return (
    <>
      <h1>
        Favourites
      </h1>

      <div className={styles.container}>
        {items.map(item => <ItemCard key={item.id} phone={item} />)}
      </div>
    </>
  );
};
