import {Product} from "../../../../types/Product";
import instance from "../insctance";
import {Categories} from "../../../../types/Categories";
import {ProductResponse} from "../../../../types/ProductResponse";

type GetProducts = (
  props: {
    category: Categories
    page: string | null,
    limit: string | null,
    query: string | null
  }
) => Promise<ProductResponse>

export const get: GetProducts = async ({
  category,
  page,
  limit,
  query
}) => {
  const searchParams = new URLSearchParams();
  searchParams.set("category", category);

  if (page) {
    searchParams.set("page", page);
  }

  if (limit) {
    searchParams.set("limit", limit);
  }

  if (query) {
    searchParams.set("query", query);
  }

  const response = await instance.get(`/products?${searchParams.toString()}`);

  if (response.status === 200) {
    const { count, nextPage, prevPage, data } = response.data;

    return { count, nextPage, prevPage, data: data.map((item: Product) => {
      delete item.discount;

      if (item.images) {
        const image = item.images[0].string;
        delete item.images;

        return { ...item, image };
      }
      return { ...item };
    }) };
  }

  return Promise.reject("Server error");
};
