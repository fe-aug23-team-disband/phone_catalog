// import SliderTool from "react-slick";
// import phones from "./phones.json";
// import { ItemCard } from "../../entities/ItemCard/ItemCard";
import Slider from "react-slick";
import { PhoneType } from "../../types/PhoneType";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phones from "./phones.json";
import styles from "./ItemSlider.module.scss";
import { ItemCard } from "../../entities/ItemCard/ItemCard";
interface Props {
  name: string;
  data?: PhoneType;
}

export const ItemSlider: React.FC<Props> = ({
  name,
}) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>{name}</h2>
      <Slider {...settings}>
        {phones.map(phone => <ItemCard phone={phone} key={phone.id} />)}
      </Slider>
    </div>
  );
};