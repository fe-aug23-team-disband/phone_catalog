import { Category } from "../../widgets/Category/Category";
import { Carousel } from "../../widgets/Carousel/Carousel";
import { ItemSlider } from "../../widgets/ItemSlider/ItemSlider";
import { AsyncWrapper } from "../../shared/AsyncWrapper/AsyncWrapper";
import { useLoaderData } from "react-router-dom";
import { ProductShorted } from "../../types/Product";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const { latest, hotPrice } = useLoaderData() as {
    latest: Promise<ProductShorted>;
    hotPrice: Promise<ProductShorted>;
  };

  // console.log()

  return (
    <>
      <h1 className={styles.heading}>Welcome to Nice Gadgets store!</h1>

      <Carousel />

      {/* i think we need here skeleton on loading and somehow display error */}
      <AsyncWrapper
        data={latest}
        Loader={<ItemSlider name="Brand new model" state="loading" />}
        Error={<ItemSlider name="Brand new model" state="error" />}
      >
        <ItemSlider name="Brand new model" />
      </AsyncWrapper>

      <Category />

      {/* i think we need here skeleton on loading and somehow display error */}
      <AsyncWrapper
        data={hotPrice}
        Loader={<ItemSlider name="Hot prices" state="loading" />}
        Error={<ItemSlider name="Hot prices" state="error" />}
      >
        <ItemSlider name="Hot prices" />
      </AsyncWrapper>
    </>
  );
};
