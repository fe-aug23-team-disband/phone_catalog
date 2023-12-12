import SliderTool from "react-slick";
import phones from "./phones.json";
import styles from "./Slider.module.scss";
import { ItemCard } from "../../entities/ItemCard/ItemCard";

export const Slider = () => {
  const firstEight = [phones[0], phones[1], phones[2], phones[3], phones[4], phones[5], phones[6], phones[7]];

  const settings = {
    dots: true,
    infinite: false,
    rows: 4,
    speed: 500,
    slidesPerRow: 4,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  return (
    <div className={styles.SliderStyle}>
      <SliderTool {...settings}>
        {firstEight.map(phone => (
          <div className="" key={phone.id}>
            <ItemCard phone={phone} />
          </div>
        ))}
      </SliderTool>
    </div>
  );
};
