import instance from "../instance";
import {Product, ProductShorted} from "../../../types/Product";

type GetSpecials = (
  props: {
    special: "hot-price" | "latest",
    category: "phones" | "tablets" | "accessories"
  }
) => Promise<ProductShorted>

export const getSpecials: GetSpecials = async ({ special, category }) => {
  const response = await instance.get(`/products/specials/${special}?category=${category}`);

  if (response.status === 200) {
    const products = response.data;

    return products.map((item: Product) => {
      delete item.discount;

      if (item.images) {
        const image = item.images[0].string;
        delete item.images;

        return { ...item, image };
      }
      return { ...item };
    });
  }

  return Promise.reject("Server error");
};
