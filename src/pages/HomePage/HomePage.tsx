import { Category } from "../../widgets/Category/Category";
import { Carousel } from "../../widgets/Carousel/Carousel";
import { ItemSlider } from "../../widgets/ItemSlider/ItemSlider";
import { AsyncWrapper } from "../../shared/AsyncWrapper/AsyncWrapper";
import { useLoaderData } from "react-router-dom";
import { ProductShorted } from "../../types/Product";

export const HomePage = () => {
  const { latest, hotPrice } = useLoaderData() as {
    latest: Promise<ProductShorted>;
    hotPrice: Promise<ProductShorted>;
  };

  return (
    <>
      <h1>Welcome to Nice Gadgets store!</h1>

      <Carousel />

      {/* i think we need here skeleton on loading and somehow display error */}
      <AsyncWrapper data={latest} Loader={<p>Loading</p>} Error={<p>Error</p>}>
        <ItemSlider name="Brand new model" />
      </AsyncWrapper>

      <Category />

      {/* i think we need here skeleton on loading and somehow display error */}
      <AsyncWrapper
        data={hotPrice}
        Loader={<p>Loading</p>}
        Error={<p>Error</p>}
      >
        <ItemSlider name="Hot prices" />
      </AsyncWrapper>
    </>
  );
};
