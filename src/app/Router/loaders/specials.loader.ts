import {LoaderFunction} from "@remix-run/router";
import productClient from "../api/productsClient";
import {defer} from "react-router-dom";

export {};
export const specialsLoader: LoaderFunction = async () => {
  try {
    const latest = productClient.getSpecials({ special: "latest", category: "phones" });
    const hotPrice = productClient.getSpecials({ special: "hot-price", category: "phones" });

    return defer({ latest, hotPrice });
  } catch (e) {
    return defer({ data: "Nodata" });
  }
};
