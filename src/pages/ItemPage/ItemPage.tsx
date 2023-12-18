import { useLoaderData } from "react-router-dom";
import { AsyncWrapper } from "../../shared/AsyncWrapper/AsyncWrapper";
import { ItemInfo } from "./ItemInfo/ItemInfo";
import { Product, ProductShorted } from "../../types/Product";
import { ItemSlider } from "../../widgets/ItemSlider/ItemSlider";

export const ItemPage = () => {
  const { product, related } = useLoaderData() as {
    product: Promise<Product>;
    related: Promise<ProductShorted[]>;
  };

  return (
    <>
      <AsyncWrapper
        data={product}
        Loader={"Loading..."}
        Error={"Error"}
      >
        <ItemInfo />
      </AsyncWrapper>

      <AsyncWrapper
        data={related}
        Loader={<ItemSlider name={"You may also like"} state="loading" />}
        Error={<ItemSlider name={"You may also like"} state="error" />}
      >
        <ItemSlider name={"You may also like"} />
      </AsyncWrapper>
    </>
  );
};
