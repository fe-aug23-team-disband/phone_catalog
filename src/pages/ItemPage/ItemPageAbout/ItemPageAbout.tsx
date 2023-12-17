/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import styles from "./ItemPageAbout.module.scss";
import { Description } from "../../../types/Description";
// import { useAsyncValue } from "react-router-dom";
// import { Product } from "../../../types/Product";

type Props = {
  description: Description[],
}

// need to change types

export const ItemPageAbout: React.FC<Props> = ({ description }) => {
  // const data = useAsyncValue() as Product;

  return (
    <div className={styles.about}>
      <div className={styles.about__product}>
        <h3 className={styles.about__title}>
          About
        </h3>

        <div className={`${styles["about__product-items"]}`}>
          {description.map((item: Description) => {
            const { id, title, text } = item;
            return (
              <Fragment key={id}>
                <div className={`${styles["about__product-container"]}`}>
                  <h4 className={`${styles["about__product-name"]}`}>
                    {title}
                  </h4>

                  <p className={styles["about__product-info"]}>
                    {text.map((text: string) => (
                      <p key={text} className={styles["about__product-text"]}>
                        {text}
                      </p>
                    ))}
                  </p>
                </div>

              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
