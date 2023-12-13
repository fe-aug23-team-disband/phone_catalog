import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { FavouritesPage } from "./pages/FavouritesPage/FavouritesPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ItemPage } from "./pages/ItemPage/ItemPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "phones",
        element: <CatalogPage type={"phones"} />,
      },
      {
        path: "tablets",
        element: <CatalogPage type={"tablets"} />,
      },
      {
        path: "accessories",
        element: <CatalogPage type={"accessories"} />,
      },
      {
        path: "product/:productId",
        element: <ItemPage />,
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
        path: "*",
        element: <NotFoundPage />,
      }
    ],
  }
]);

root.render(
  <RouterProvider router={router} />
);
