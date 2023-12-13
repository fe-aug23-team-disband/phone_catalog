import React from "react";
import styles from "./PhoneCard.module.scss";
import cn from "classnames";

type Props = {
  phone_img: string;
  selectedImage: string,
  onClick: () => void;
};

export const PhoneCard: React.FC<Props> = ({
  phone_img,
  onClick,
  selectedImage
}) => {
  return (
    <div
      className={cn(`${styles.phone__container}`, {
        [styles.active]: phone_img === selectedImage,
      })}
      onClick={onClick}
    >
      <img
        src={phone_img}
        alt="Phone"
        className={`${styles.phone__img}`}
      />
    </div>
  );
};
