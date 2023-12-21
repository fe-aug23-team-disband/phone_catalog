import React, { Fragment } from "react";
import styles from "./ItemPageAbout.module.scss";
import { Description } from "../../../../types/Description";

type Props = {
  description: Description[],
}

export const ItemPageAbout: React.FC<Props> = ({ description }) => {
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

                  {text.map((text: string) => (
                    <p key={text} className={styles["about__product-info"]}>
                      {text}
                    </p>
                  ))}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
