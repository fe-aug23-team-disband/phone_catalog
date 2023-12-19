import { useEffect, useState } from "react";

import { Color } from "../../../types/Color";
import { Product } from "../../../types/Product";
import { Image } from "../../../types/Image";

import styles from "../ItemPage.module.scss";

import { ItemPageAbout } from "./ItemPageAbout/ItemPageAbout";
import { ItemPageTechSpecs } from "./ItemPageTechSpecs/ItemPageTechSpecs";
import { ItemPhoto } from "./ItemPhoto/ItemPhoto";
import { ItemMainInfo } from "./ItemMainInfo/ItemMainInfo";
import { useAsyncValue } from "react-router-dom";

export const ItemInfo = () => {
  const itemInfoFromApi = useAsyncValue() as Product;

  const [selectedImage, setSelectedImage] = useState<string>(itemInfoFromApi.image);
  const [selectedCapacity, setSelectedCapacity] = useState<string>(itemInfoFromApi.ram);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(() => image.string);
  };

  console.log(itemInfoFromApi);

  const handleColorClick = (color: Color) => {
    setSelectedColor(color);
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  useEffect(() => {
    setSelectedImage(() => itemInfoFromApi.image);

    const splitedNamespace = itemInfoFromApi.namespaceId.split(itemInfoFromApi.capacity.toLowerCase());

    const currentColor = splitedNamespace.pop()?.slice(1).split("-").join("");

    setSelectedColor(() => itemInfoFromApi.colors.find(color => color.name.split(" ").join("") === currentColor) || null);

    setSelectedCapacity(() => itemInfoFromApi.capacity);
  }, [itemInfoFromApi, selectedColor, selectedCapacity]);

  return (
    <div className={`${styles.itemPage}`}>
      <h2 className={`${styles.itemPage__title}`}>{itemInfoFromApi.name}</h2>

      <div className={`${styles.itemPage__content}`}>
        <div className={`${styles.itemPage__top}`}>
          <ItemPhoto
            images={itemInfoFromApi.images || []}
            selectedImage={selectedImage}
            onSelected={handleImageClick}
          />

          <ItemMainInfo
            itemInfo={itemInfoFromApi}
            selectedColor={selectedColor}
            handleColorChange={handleColorClick}
            selectedCapacity={selectedCapacity}
            handleCapacityChange={handleCapacityClick}
          />
        </div>

        <div className={`${styles["itemPage__about-tech"]}`}>
          <ItemPageAbout description={itemInfoFromApi.description} />

          <ItemPageTechSpecs phoneInfoApi={itemInfoFromApi} />
        </div>
      </div>
    </div>
  );
};
