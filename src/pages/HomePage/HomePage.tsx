import { Category } from "../../widgets/Category/Category";
import { Carousel } from "../../widgets/Carousel/Carousel";
import { ItemSlider } from "../../widgets/ItemSlider/ItemSlider";

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to Nice Gadgets store!</h1>
      <Carousel />
      <ItemSlider name="Brand new model" />
      <Category />
      <ItemSlider name="Hot prices" />
    </>
  );
};
