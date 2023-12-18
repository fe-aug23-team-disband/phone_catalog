import instance from "../instance";

type PostProduct = (
  props: {
    user_id: string,
    products: {
      id: string,
      count: number
    }[]
  }
) => Promise<unknown>

type PreparedProduct = [string, number]

export const createOrder: PostProduct = async ({
  user_id,
  products
}) => {
  const preparedProducts = products.reduce((acc, item) => {
    const product: PreparedProduct = [item.id, item.count];
    return [ ...acc, product ];
  }, [] as PreparedProduct[]);

  const response = await instance.post("/orders", { user_id, products: preparedProducts });

  if (response.status === 201) {
    return response.data;
  }

  console.log(response);

  return Promise.reject("Server error");
};
