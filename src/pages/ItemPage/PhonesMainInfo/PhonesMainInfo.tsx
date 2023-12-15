import React from "react";
import styles from "./PhonesMainInfo.module.scss";

import { PhoneProperties } from "../PhoneProperties/PhoneProperties";
// import { AvailableColor } from "../AvailableColor/AvailableColor";
// import { CapacityAvailable } from "../CapacityAvailable/CapacityAvailable";
import { PriceSection } from "../PriceSection/PriceSection";

type Props = {
  phoneInfo: string,
};

export const PhonesMainInfo:React.FC<Props> = ({phoneInfo}) => {

  return (
    <div className={`${styles["main-info__container"]}`}>
      {/* <AvailableColor data={phoneInfo} />

      <CapacityAvailable data={phoneInfo} /> */}

      <PriceSection />

      <PhoneProperties data={phoneInfo} />
    </div>
  );
};
