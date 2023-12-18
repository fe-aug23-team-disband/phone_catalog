import React from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import styles from "./Carousel.module.scss";
import baner1 from "../../static/Carousel/carousele-banner.png";
import baner2 from "../../static/Carousel/carousele-banner_2.png";
import baner3 from "../../static/Carousel/carousele-banner_3.png";
import baner_mobile1 from "../../static/Carousel/carousele-banner_mobile_1.png";
import baner_mobile2 from "../../static/Carousel/carousele-banner_mobile_2.png";
import baner_mobile3 from "../../static/Carousel/carousele-banner_mobile_3.png";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const banners = [
    { desktop: baner1, mobile: baner_mobile1, link: "phones" },
    { desktop: baner2, mobile: baner_mobile2, link: "tablets" },
    { desktop: baner3, mobile: baner_mobile3, link: "accessories" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
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
          <Link to={banner.link} key={index} className={styles.carousel_wrap_item}>
            <img
              className={styles.carousel_banner}
              src={isSmallScreen ? banner.mobile : banner.desktop}
              alt={`banner${index + 1}`}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};
