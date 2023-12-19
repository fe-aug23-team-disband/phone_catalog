import React, { useEffect, useState } from "react";

import { Color } from "../../../types/Color";
import { Product } from "../../../types/Product";
import { Image } from "../../../types/Image";

import styles from "../ItemPage.module.scss";
import ErrorImage from "../../../static/ItemPageState/error-state.png";
import LoadingImage from "../../../static/ItemPageState/loading-state.png";

import { ItemPageAbout } from "./ItemPageAbout/ItemPageAbout";
import { ItemPageTechSpecs } from "./ItemPageTechSpecs/ItemPageTechSpecs";
import { PhonesPhoto } from "./PhonesPhoto/PhonesPhoto";
import { PhonesMainInfo } from "./PhonesMainInfo/PhonesMainInfo";
import { useAsyncValue } from "react-router-dom";

type Props = {
  state?: "loading" | "error",
};

export const ItemInfo: React.FC<Props> = ({ state }) => {
  const phoneInfoFromApi = useAsyncValue() as Product;
  const [selectedImage, setSelectedImage] = useState<string>(phoneInfoFromApi?.image || "");
  const [selectedCapacity, setSelectedCapacity] = useState<string>(phoneInfoFromApi?.ram || "");
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  console.log(phoneInfoFromApi);

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
    if (phoneInfoFromApi) {
      setSelectedImage(phoneInfoFromApi.image);

      const splitedNamespace = phoneInfoFromApi.namespaceId.split(phoneInfoFromApi.capacity.toLowerCase());

      const currentColor = splitedNamespace.pop()?.slice(1).split("-").join("");

      setSelectedColor(phoneInfoFromApi.colors.find(color => color.name.split(" ").join("") === currentColor) || null);

      setSelectedCapacity(phoneInfoFromApi.capacity);
    }
  }, [phoneInfoFromApi, selectedColor, selectedCapacity]);

  return (
    <div className={`${styles.itemPage}`}>
      {!state && (
        <h2 className={`${styles.itemPage__title}`}>{phoneInfoFromApi.name}</h2>
      )}

      {!state
        ? (
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
        ) : (state === "error" ? (
          <div className={styles["itemPage__state-error"]}>
            <img src={ErrorImage} alt="Error" />
          </div>
        ) : (
          <div className={styles["itemPage__state-loading"]}>
            <div className={styles.animation}>
              <p className={styles.loading}>Loading...</p>

              <img src={LoadingImage} alt="deer" className={styles["infinite-rotate"]} />
            </div>
          </div>
        )
        )}
    </div>
  );
};
