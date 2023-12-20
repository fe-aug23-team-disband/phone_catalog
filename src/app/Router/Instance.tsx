import { createHashRouter, Navigate } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CatalogPage } from "../../pages/CatalogPage/CatalogPage";
import { ItemPage } from "../../pages/ItemPage/ItemPage";
import { FavouritesPage } from "../../pages/FavouritesPage/FavouritesPage";
import { CartPage } from "../../pages/CartPage/CartPage";
import { RightsPage } from "../../pages/RightsPage/RightsPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { productsLoader, productsListLoader, specialsLoader } from "./loaders";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: specialsLoader
      },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },

      {
        path: "phones",
        element: <CatalogPage />,
        loader: productsListLoader,
      },
      {
        path: "tablets",
        element: <CatalogPage />,
        loader: productsListLoader,
      },
      {
        path: "accessories",
        element: <CatalogPage />,
        loader: productsListLoader,
      },
      {
        path: ":category/:slug",
        element: <ItemPage />,
        loader: productsLoader,
      },

      {
        path: "favourites",
        element: <FavouritesPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "rights",
        element: <RightsPage />,
      },
      {
        path: "contacts",
        element: <ContactsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ],
  }
]);
