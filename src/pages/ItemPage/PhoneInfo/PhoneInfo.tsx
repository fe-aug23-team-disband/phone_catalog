import { useEffect, useState } from "react";

import { Color } from "../../../types/Color";
import { Product } from "../../../types/Product";
import { Image } from "../../../types/Image";

import styles from "../ItemPage.module.scss";

import { ItemPageAbout } from "./ItemPageAbout/ItemPageAbout";
import { ItemPageTechSpecs } from "./ItemPageTechSpecs/ItemPageTechSpecs";
import { PhonesPhoto } from "./PhonesPhoto/PhonesPhoto";
import { PhonesMainInfo } from "./PhonesMainInfo/PhonesMainInfo";
import { useAsyncValue } from "react-router-dom";

export const PhoneInfo = () => {
  const phoneInfoFromApi = useAsyncValue() as Product;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string>("");

  const handleImageClick = (image: Image) => {
    setSelectedImage(image.string);
  };

  const handleColorClick = (color: Color) => {
    setSelectedColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  useEffect(() => {
    setSelectedImage(phoneInfoFromApi.image);

    const currentColor = phoneInfoFromApi.namespaceId
      .split("-")
      .pop();

    setSelectedColor(phoneInfoFromApi.colors.find(color => color.name === currentColor) || null);

    setSelectedCapacity(phoneInfoFromApi.capacity);
  }, [phoneInfoFromApi]);

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
