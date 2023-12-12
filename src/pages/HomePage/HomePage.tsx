import { Category } from "../../widgets/Category/Category";
import { Carousel } from "../../widgets/Carousel/Carousel";
import { Slider } from "../../widgets/Slider/Slider";

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to Nice Gadgets store!</h1>
      <Carousel />
      <Slider />
      <Category />
      <Slider />
    </>
  );
};
