import {Product} from "../../../types/Product";
import instance from "../instance";
import {Categories} from "../../../types/Categories";
import {ProductResponse} from "../../../types/ProductResponse";

type GetProducts = (
  props: {
    category: Categories
    page: string | null,
    limit: string | null,
    query: string | null
    sortBy: string | null,
    desc: string | null
  }
) => Promise<ProductResponse>

export const get: GetProducts = async ({
  category,
  page,
  limit,
  query,
  sortBy,
  desc
}) => {
  const searchParams = new URLSearchParams();

  if (page) {
    searchParams.set("page", page);
  }

  if (limit) {
    searchParams.set("limit", limit);
  }

  if (query) {
    searchParams.set("query", query);
  }

  if (sortBy) {
    searchParams.set("sortBy", sortBy);
  }

  if (desc) {
    searchParams.set("desc", desc);
  }

  const response = await instance.get(`/${category}?${searchParams.toString()}`);

  if (response.status === 200) {
    const { total, onPage, nextPage, prevPage, data } = response.data;

    return { total, onPage, nextPage, prevPage, data: data.map((item: Product) => {
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
