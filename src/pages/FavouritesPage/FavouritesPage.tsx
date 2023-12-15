import {useAppSelector} from "../../app/store/hooks";
import {wishlistSelector} from "../../app/store/slices/wishlist.slice";

export const FavouritesPage = () => {
  const { items } = useAppSelector(wishlistSelector);
  console.log(items);

  return (
    <h1></h1>
  );
};
