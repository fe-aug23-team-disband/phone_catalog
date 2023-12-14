import {useAppSelector} from "../../app/store/hooks";
import {wishlistSelector} from "../../app/store/slices/wishlist.slice";

export const FavouritesPage = () => {
  const wishlist = useAppSelector(wishlistSelector);

  console.log(wishlist);

  return (
    <h1>favs</h1>
  );
};
