import { useState } from "react";
import styles from "./ItemPage.module.scss";
// import cn from "classnames";

import { PhoneCard } from "./PhoneCard/PhoneCard";

// import HeartButton from "./images/icons/button-heart.png";
import phoneInfoFromApi from "./api/apple-iphone-11-pro-512gb-spacegray.json";
import { AvailableColor } from "./AvailableColor/AvailableColor";
import { CapacityAvailable } from "./СapacityAvailable/CapacityAvailable";

export const ItemPage = () => {
  const [selectedImage, setSelectedImage] = useState(phoneInfoFromApi.images[0]);
  const [selectedColor, setSelectedColor] = useState(phoneInfoFromApi.colorsAvailable[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(phoneInfoFromApi.capacityAvailable[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  return (
    <div className={`${styles.itemPage}`}>
      <h1 className={`${styles.itemPage__title}`}>{phoneInfoFromApi.name}</h1>

      <div className={`${styles.itemPage__content}`}>
        <div className={`${styles.itemPage__phoneMain}`}>
          <div className={`${styles["itemPage__phone-left"]}`}>
            <div className={`${styles["itemPage__phone-list"]}`}>
              {phoneInfoFromApi.images.map((phone, index) => (
                <PhoneCard
                  key={index}
                  phone_img={phone}
                  selectedImage={selectedImage}
                  onClick={() => handleImageClick(phone)}
                />
              ))}
            </div>

            <div className={`${styles["itemPage__phone-selected"]}`}>
              <img
                className={`${styles["itemPage__phone-image"]}`}
                src={selectedImage}
                alt="Selected phone"
              />
            </div>
          </div>

          <div className={`${styles["itemPage__phone-rigth"]}`}>
            <div className={`${styles.itemPage__available}`}>
              <div className={`${styles["itemPage__phone-rigth-colors"]}`}>
                <p>Available colors</p>

                <div className={`${styles.colors__list}`}>
                  {phoneInfoFromApi.colorsAvailable.map(color => (
                    <AvailableColor
                      key={color}
                      color={color}
                      selectedColor={selectedColor}
                      onClick={() => handleColorClick(color)}
                      link=""
                    />
                  ))}
                </div>
              </div>

              <p>ID: {phoneInfoFromApi.id}</p>
            </div>

            <div className={`${styles["itemPage__phone-rigth-capacity"]}`}>
              <p>Select capacity</p>

              <div className={`${styles.colors__list}`}>
                {phoneInfoFromApi.capacityAvailable.map(capacity => (
                  <CapacityAvailable
                    key={capacity}
                    link=""
                    capacity={capacity}
                    selectedCapacity={selectedCapacity}
                    onClick={() => handleCapacityClick(capacity)}
                  />
                ))}
              </div>
            </div>

            <div className="itemPage__buy">
              <div className={`${styles["itemPage__buy-price"]}`}>
                <p className={`${styles.priceDiscount}`}>
                  ${phoneInfoFromApi.priceDiscount}
                </p>

                <p className={`${styles.priceRegular}`}>
                  ${phoneInfoFromApi.priceRegular}
                </p>
              </div>

              <div className={`${styles.itemPage__buttons}`}>
                <button className={`${styles["itemPage__buttons-buy"]}`}>
                  Add to cart
                </button>

                {/* <button className={`${styles["itemPage__buttons-like"]}`}>
                  <img src={HeartButton} alt="Button add to your wishes" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
