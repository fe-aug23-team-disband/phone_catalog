import { useState, useEffect } from "react";

import { Color } from "../../types/Color";
import { Product } from "../../types/Product";
import { Image } from "../../types/Image";

import styles from "./ItemPage.module.scss";

import { ItemPageAbout } from "./ItemPageAbout/ItemPageAbout";
import { ItemPageTechSpecs } from "./ItemPageTechSpecs/ItemPageTechSpecs";
import { PhonesPhoto } from "./PhonesPhoto/PhonesPhoto";
import { PhonesMainInfo } from "./PhonesMainInfo/PhonesMainInfo";

export const ItemPage = () => {
  const [phoneInfoFromApi, setPhoneInfoFromApi] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://phone-catalog-api-ifht.onrender.com/products/apple-iphone-11-pro-max-256gb-gold"
        );

        const data: Product = await response.json();
        setPhoneInfoFromApi(data);
        setSelectedImage(data.images ? data.images[0] : null);
        setSelectedColor(data.colors[0]);
        setSelectedCapacity(data.capacityAvailable[0]);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleColorClick = (color: Color) => {
    setSelectedColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  if (!phoneInfoFromApi) {
    return <div>Loading...</div>;
  }

  console.log(selectedImage);

  return (
    <div className={`${styles.itemPage}`}>
      <h2 className={`${styles.itemPage__title}`}>{phoneInfoFromApi.name}</h2>

      <div className={`${styles.itemPage__content}`}>
        <div className={`${styles.itemPage__top}`}>
          <PhonesPhoto
            images={phoneInfoFromApi.images || []}
            selectedImage={selectedImage}
            onSelected={handleImageClick}
          />

          <PhonesMainInfo
            phoneInfo={phoneInfoFromApi}
            selectedColor={selectedColor}
            handleColorChange={handleColorClick}
            selectedCapacity={selectedCapacity}
            handleCapacityChange={handleCapacityClick}
          />
        </div>

        <div className={`${styles["itemPage__about-tech"]}`}>
          <ItemPageAbout description={phoneInfoFromApi.description} />

          <ItemPageTechSpecs phoneInfoApi={phoneInfoFromApi} />
        </div>
      </div>
    </div>
  );
};
