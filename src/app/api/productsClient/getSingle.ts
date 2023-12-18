import {Product} from "../../../types/Product";
import instance from "../instance";

type GetProduct = (
  props: {
    namespaceId: string
  }
) => Promise<Product>

export const getSingle: GetProduct = async ({
  namespaceId
}) => {
  const response = await instance.get(`/products/${namespaceId}`);

  if (response.status === 200) {
    const product: Product = response.data;

    delete product.discount;

    if (product.images) {
      const image = product.images[0].string;
      return { ...product, image };
    }

    return { ...product };
  }

  return Promise.reject("Server error");
};
