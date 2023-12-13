import ReactDOM from "react-dom/client";

import { router } from "./app/Router/Instance";
import { RouterProvider } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);
