import productClient from "../../api/productsClient";
import {Categories} from "../../../types/Categories";
import {defer} from "react-router-dom";

export const productsListLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  try {
    const data = productClient.get({
      category: searchParams.get("category") as Categories,
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
      query: searchParams.get("query"),
    });

    return defer({ data });
  } catch (e) {
    return defer({ data: "Nodata" });
  }
};