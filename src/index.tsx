import ReactDOM from "react-dom/client";
import { router } from "./app/Router/Instance";
import { RouterProvider } from "react-router";
import {Provider} from "react-redux";
import {store} from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
