// import React, { useEffect, useState } from "react";
import styles from "./PhonesMainInfo.module.scss";

import { PhoneProperties } from "../PhoneProperties/PhoneProperties";
import { AvailableColor } from "../AvailableColor/AvailableColor";
import { CapacityAvailable } from "../CapacityAvailable/CapacityAvailable";
import { PriceSection } from "../PriceSection/PriceSection";
import { Product } from "../../../types/Product";
import { Color } from "../../../types/Color";
// import { Color } from "../../../types/Color";

type Props = {
  phoneInfo: Product,
  selectedColor: Color | null,
  selectedCapacity: string,
  handleColorChange: (value: Color) => void,
  handleCapacityChange: (value: string) => void,
};

export const PhonesMainInfo: React.FC<Props> = ({
  phoneInfo,
  selectedColor,
  handleColorChange,
  selectedCapacity,
  handleCapacityChange,
}) => {
  // const [details, setDetails] = useState<Product | null>(null);

  // useEffect(() => {
  //   const dataFromApi = JSON.parse(phoneInfo);
  //   setDetails(dataFromApi);
  // }, []);

  // if (!details) {
  //   return <p>Error...</p>;
  // }

  console.log(phoneInfo);
  return (
    <div className={`${styles["main-info__container"]}`}>
      <AvailableColor
        data={phoneInfo}
        selectedColor={selectedColor}
        handleColorChange={handleColorChange}
      />

      <CapacityAvailable
        data={phoneInfo}
        selectedCapacity={selectedCapacity}
        onClick={handleCapacityChange}
      />

      <PriceSection data={phoneInfo} />

      <PhoneProperties data={phoneInfo} />
    </div>
  );
};
