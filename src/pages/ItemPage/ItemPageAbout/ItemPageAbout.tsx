/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import styles from "./ItemPageAbout.module.scss";

type Props = {
  description: any,
}

// need to change types

export const ItemPageAbout: React.FC<Props> = ({ description }) => {

  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.about__product}`}>
        <h3 className={`${styles.about__title}`}>
          About
        </h3>

        <div className={`${styles["about__product-items"]}`}>
          {description.map((item: any) => {
            const { title, text } = item;
            return (
              <Fragment key={title}>
                <div className={`${styles["about__product-container"]}`}>
                  <h4 className={`${styles["about__product-name"]}`}>
                    {title}
                  </h4>

                  <p className={`${styles["about__product-info"]}`}>
                    {text.map((text: string) => (
                      <p key={text} className={`${styles["about__product-text"]}`}>
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
