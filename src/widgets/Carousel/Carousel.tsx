import React, { useContext } from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import styles from "./Carousel.module.scss";
import { scrollToTop } from "../../shared/utils/ScrollToTop";

import Phones_Banner_Desktop from "../../static/Carousel/banner-phones-desktop.png";
import Tablets_Banner_Desktop from "../../static/Carousel/banner-tablets-desktop.png";
import Accessories_Banner_Desktop from "../../static/Carousel/banner-accessories-desktop.png";
import Phones_Banner_Mobile from "../../static/Carousel/banner-phones-mobile.png";
import Tablets_Banner_Mobile from "../../static/Carousel/banner-tablets-mobile.png";
import Accessories_Banner_Mobile from "../../static/Carousel/banner-accessories-mobile.png";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../app/providers/ThemeProvider";

export const Carousel = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const { theme } = useContext(ThemeContext);
  const banners = [
    {
      desktop: Phones_Banner_Desktop,
      mobile: Phones_Banner_Mobile,
      link: "phones"
    },
    {
      desktop: Tablets_Banner_Desktop,
      mobile: Tablets_Banner_Mobile,
      link: "tablets"
    },
    {
      desktop: Accessories_Banner_Desktop,
      mobile: Accessories_Banner_Mobile,
      link: "accessories"
    }
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
    swipe: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          swipe: true
        }
      }
    ]
  };
  return (
    <div>
      <Slider
        {...settings}
        className={`${styles.carousel} ${
          theme === "light"
            ? "carousel_main carousel_main_light"
            : "carousel_main"
        }`}
      >
        {banners.map((banner, index) => (
          <Link
            to={banner.link}
            key={index}
            className={styles.carousel_wrap_item}
            onClick={() => scrollToTop()}
          >
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
