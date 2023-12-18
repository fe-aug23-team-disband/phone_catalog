
import { useLoaderData } from "react-router-dom";
import { ProductResponse } from "../../types/ProductResponse";
import { AsyncWrapper } from "../../shared/AsyncWrapper/AsyncWrapper";
import { CategoryProducts } from "./CategoryProducts/CategoryProducts";

export const CatalogPage = () => {
  const { data } = useLoaderData() as { data: Promise<ProductResponse> };

  return (
    <AsyncWrapper data={data} Loader={<p>Loading</p>} Error={<p>Loading</p>}>
      <CategoryProducts />
    </AsyncWrapper>
  );
};
