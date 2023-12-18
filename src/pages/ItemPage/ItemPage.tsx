import { useLoaderData } from "react-router-dom";
import { AsyncWrapper } from "../../shared/AsyncWrapper/AsyncWrapper";
import { PhoneInfo } from "./PhoneInfo";
import { Product, ProductShorted } from "../../types/Product";
import {ItemSlider} from "../../widgets/ItemSlider/ItemSlider";
// import { ItemSlider } from "../../widgets/ItemSlider/ItemSlider";

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
        <PhoneInfo />
      </AsyncWrapper>

      <AsyncWrapper
        data={related}
        Loader={"Loading..."}
        Error={"Error"}
      >
        <ItemSlider name={"You may also like"} />
      </AsyncWrapper>
    </>
  );
};
