import {Product} from "../../../../types/Product";
import instance from "../insctance";

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
    return response.data;
  }

  return Promise.reject("Server error");
};
