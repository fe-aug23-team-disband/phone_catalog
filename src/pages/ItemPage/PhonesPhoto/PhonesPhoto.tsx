import React from "react";
import styles from "./PhonesPhoto.module.scss";
import cn from "classnames";
import { InterfaceImage } from "../../../types/InterfaceImage";

type Props = {
  images: InterfaceImage[];
  selectedImage: InterfaceImage | null;
  onSelected: (image: InterfaceImage) => void;
};

export const PhonesPhoto: React.FC<Props> = ({
  images,
  onSelected,
  selectedImage,
}) => {
  return (
    <div className={`${styles.phones}`}>
      <div className={`${styles.phones__list}`}>
        <ul className={`${styles["phones__list-items"]}`}>
          {images.map(image => {
            const { id, string } = image;

            return (
              <li
                key={id}
                className={cn(styles.phones__item, {
                  [styles["phones__item-active"]]: image.id === selectedImage?.id,
                })}
                onClick={() => onSelected(image)}
              >
                <img
                  src={`data:image/png;base64, ${string}`}
                  alt="Phone"
                  className={`${styles.phones__image}`}
                />
              </li>
            );
          })}
        </ul>

        <div className={`${styles.phones__selected}`}>
          {selectedImage !== null && (
            <img
              src={`data:image/png;base64, ${selectedImage.string}`}
              alt={`${selectedImage} Selected image`}
              className="phones__selected-img"
            />
          )}
        </div>
      </div>
    </div>
  );
};
