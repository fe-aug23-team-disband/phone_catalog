import productClient from "../../api/productsClient";
import {defer} from "react-router-dom";
import {LoaderFunction} from "@remix-run/router";

export const productsLoader: LoaderFunction<{ slug: string }> = async ({ params }) => {
  try {
    if (params.slug) {
      const product = productClient.getSingle({ namespaceId: params.slug });
      const related = productClient.getRecommended({ namespaceId: params.slug });

      return defer({ product, related });
    }
  } catch (e) {
    return defer({ data: "Nodata" });
  }
};
