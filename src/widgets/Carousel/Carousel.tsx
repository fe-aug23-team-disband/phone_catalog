import React from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import styles from "./Carousel.module.scss";
import baner1 from "./carousele-banner.png";
import baner2 from "./carousele-banner_2.png";
import baner3 from "./carousele-banner_3.png";
import baner_mobile1 from "./carousele-banner_mobile_1.png";
import baner_mobile2 from "./carousele-banner_mobile_2.png";
import baner_mobile3 from "./carousele-banner_mobile_3.png";

export const Carousel = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const banners = [
    { desktop: baner1, mobile: baner_mobile1 },
    { desktop: baner2, mobile: baner_mobile2 },
    { desktop: baner3, mobile: baner_mobile3 }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings} className={`${styles.carousel} carousel_main`}>
        {banners.map((banner, index) => (
          <div key={index} className={styles.carousel_wrap_item}>
            <img
              className={styles.carousel_banner}
              src={isSmallScreen ? banner.mobile : banner.desktop}
              alt={`banner${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
