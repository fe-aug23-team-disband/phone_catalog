import React from "react";
import styles from "./ItemPageTechSpecs.module.scss";
import { Product } from "../../../../types/Product";

type Props = {
  phoneInfoApi: Product,
};

export const ItemPageTechSpecs: React.FC<Props> = ({ phoneInfoApi }) => {

  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = phoneInfoApi;

  return (
    <div className={`${styles["tech-specs"]}`}>
      <h3 className={`${styles["tech-specs__title"]}`}>
        Tech Specs
      </h3>

      <div className={`${styles["tech-specs__information"]}`}>
        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            Screen
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {screen}
          </p>
        </div>

        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            Resolution
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {resolution}
          </p>
        </div>

        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            Processor
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {processor}
          </p>
        </div>

        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            RAM
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {ram}
          </p>
        </div>

        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            Built in memory
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {capacity}
          </p>
        </div>

        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            Camera
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {camera}
          </p>
        </div>

        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            Zoom
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {zoom}
          </p>
        </div>

        <div className={`${styles["tech-specs__section"]}`}>
          <p className={`${styles["tech-specs__section-title"]}`}>
            Cell
          </p>

          <p className={`${styles["tech-specs__section-value"]}`}>
            {cell.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};
