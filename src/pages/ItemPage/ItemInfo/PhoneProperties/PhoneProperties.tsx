// import React, { useEffect, useState } from "react";
import styles from "./PhoneProperties.module.scss";
import { Product } from "../../../../types/Product";

type Props = {
  data: Product,
};

export const PhoneProperties: React.FC<Props> = ({ data }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
  } = data;

  return (
    <div className={`${styles.phoneProperties}`}>
      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>Screen</p>

        <p className={`${styles.phoneProperties__value}`}>
          {screen}
        </p>
      </div>

      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>Resolution</p>

        <p className={`${styles.phoneProperties__value}`}>
          {resolution}
        </p>
      </div>

      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>Processor</p>

        <p className={`${styles.phoneProperties__value}`}>
          {processor}
        </p>
      </div>

      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>RAM</p>

        <p className={`${styles.phoneProperties__value}`}>
          {ram}
        </p>
      </div>
    </div>
  );
};
