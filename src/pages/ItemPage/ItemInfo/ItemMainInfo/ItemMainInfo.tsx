// import React, { useEffect, useState } from "react";
import styles from "./ItemMainInfo.module.scss";

import { ItemProperties } from "../ItemProperties/ItemProperties";
import { AvailableColor } from "../AvailableColor/AvailableColor";
import { CapacityAvailable } from "../CapacityAvailable/CapacityAvailable";
import { PriceSection } from "../PriceSection/PriceSection";
import { Product } from "../../../../types/Product";
import { Color } from "../../../../types/Color";

type Props = {
  itemInfo: Product,
  selectedColor: Color | null,
  selectedCapacity: string,
  handleColorChange: (value: Color) => void,
  handleCapacityChange: (value: string) => void,
};

export const ItemMainInfo: React.FC<Props> = ({
  itemInfo,
  selectedColor,
  handleColorChange,
  selectedCapacity,
  handleCapacityChange,
}) => {
  return (
    <div className={`${styles["main-info__container"]}`}>
      <AvailableColor
        data={itemInfo}
        selectedColor={selectedColor}
        handleColorChange={handleColorChange}
      />

      <CapacityAvailable
        data={itemInfo}
        selectedCapacity={selectedCapacity}
        onClick={handleCapacityChange}
      />

      <PriceSection data={itemInfo} />

      <ItemProperties data={itemInfo} />
    </div>
  );
};
