import React from "react";
import styles from "./ItemPhoto.module.scss";
import cn from "classnames";
import { Image } from "../../../../types/Image";

type Props = {
  images: Image[];
  selectedImage: string | null;
  onSelected: (image: Image) => void;
};

export const ItemPhoto: React.FC<Props> = ({
  images,
  onSelected,
  selectedImage,
}) => {
  return (
    <div className={styles.phones__wrapper}>
      <div className={`${styles.phones__selected}`}>
        {selectedImage !== null && (
          <img
            src={`${selectedImage}`}
            alt={`${selectedImage} Selected image`}
            className={styles["phones__selected-img"]}
          />
        )}
      </div>

      <div className={`${styles.phones__list}`}>
        <ul className={styles["phones__list-items"]}>
          {images.map(image => {
            const { id, string } = image;

            return (
              <li
                key={id}
                className={cn(styles.phones__item, {
                  [styles["phones__item-active"]]: image.string === selectedImage,
                })}
                onClick={() => onSelected(image)}
              >
                <img
                  src={`${string}`}
                  alt="Phone"
                  className={`${styles.phones__image}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
