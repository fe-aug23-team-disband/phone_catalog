import Slider from "react-slick";
import { PhoneType } from "../../types/PhoneType";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ItemSlider.module.scss";
import "./ItemSlider.scss";
import { ItemCard } from "../../entities/ItemCard/ItemCard";
import { useAsyncValue } from "react-router";
import { ProductShorted } from "../../types/Product";
interface Props {
  name: string;
  data?: PhoneType;
}

export const ItemSlider: React.FC<Props> = ({ name }) => {
  const data = useAsyncValue() as ProductShorted[];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "slider-style",
    margin: 16,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={`${styles.sliderContainer} card_slider`}>
      <h2 className={styles.sliderTitle}>{name}</h2>
      <Slider {...settings}>
        {data.reverse().map(phone => (
          <ItemCard phone={phone} key={phone.id} />
        ))}
      </Slider>
    </div>
  );
};
