import { useState, useEffect } from "react";
import styles from "./ItemPage.module.scss";
import { ItemPageAbout } from "./ItemPageAbout/ItemPageAbout";
import { ItemPageTechSpecs } from "./ItemPageTechSpecs/ItemPageTechSpecs";
import { PhonesPhoto } from "./PhonesPhoto/PhonesPhoto";
import { PhonesMainInfo } from "./PhonesMainInfo/PhonesMainInfo";
import { InterfaceImage } from "../../types/InterfaceImage";

interface PhoneInfo {
  name: string;
  images: InterfaceImage[];
  description: string;
}

export const ItemPage = () => {
  const [phoneInfoFromApi, setPhoneInfoFromApi] = useState<PhoneInfo | null>(null);
  const [selectedImage, setSelectedImage] = useState<InterfaceImage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://phone-catalog-api-ifht.onrender.com/products/apple-iphone-11-pro-max-512gb-gold"
        );

        const data: PhoneInfo = await response.json();
        setPhoneInfoFromApi(data);
        setSelectedImage(data.images[0]);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image: InterfaceImage) => {
    setSelectedImage(image);
  };

  console.log(phoneInfoFromApi);

  if (!phoneInfoFromApi) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.itemPage}`}>
      <h1 className={`${styles.itemPage__title}`}>{phoneInfoFromApi.name}</h1>

      <div className={`${styles.itemPage__content}`}>
        <div className={`${styles.itemPage__top}`}>
          <PhonesPhoto
            images={phoneInfoFromApi.images}
            selectedImage={selectedImage}
            onSelected={handleImageClick}
          />

          <PhonesMainInfo phoneInfo={JSON.stringify(phoneInfoFromApi)} />
        </div>

        <div className={`${styles["itemPage__about-tech"]}`}>
          <ItemPageAbout description={phoneInfoFromApi.description} />

          <ItemPageTechSpecs phoneInfoApi={JSON.stringify(phoneInfoFromApi)} />
        </div>
      </div>
    </div>
  );
};
