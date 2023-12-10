import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog";
import { Favourites } from "./components/Favourites/Favourites";
import { Cart } from "./components/Cart/Cart";
import { NotFound } from "./components/NotFound/NotFound";
import { HomePage } from "./components/HomePage/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path:  "/",
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
        element: <Catalog type={"phones"} />,
      },
      {
        path: "tablets",
        element: <Catalog type={"tablets"} />,
      },
      {
        path: "accessories",
        element: <Catalog type={"accessories"} />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  }
]);

root.render(
  <RouterProvider router={router} />
);
