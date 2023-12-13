import {Product, ProductShorted} from "../../../types/Product";
import instance from "../insctance";

type GetProducts = (
  props: {
    category: "phones" | "tablets" | "accessories",
    page?: number,
    limit?: number,
    query?: string
  }
) => Promise<{
  count: number,
  nextPage: string,
  prevPage: string,
  data: ProductShorted[]
}>

export const get: GetProducts = async ({
  category,
  page,
  limit,
  query
}) => {
  const searchParams = new URLSearchParams();
  searchParams.set("category", category);

  if (page) {
    searchParams.set("page", page.toString());
  }

  if (limit) {
    searchParams.set("limit", limit.toString());
  }

  if (query) {
    searchParams.set("query", query.toString());
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
