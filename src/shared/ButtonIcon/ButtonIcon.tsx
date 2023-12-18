import React from "react";
import styles from "./ButtonIcon.module.scss";
interface ButtonIconsProps {
  icon: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  customStyles?: string;
}

const ButtonIcon: React.FC<ButtonIconsProps> = ({
  icon,
  size = "medium",
  onClick,
  customStyles
}) => {
  const buttonSize =
    {
      small: styles.button_size_small,
      medium: styles.button_size_medium,
      large: styles.button_size_large
    }[size] || styles.button_size_small;

  return (
    <button
      className={`${styles.button_icon_wrapper} ${buttonSize} ${customStyles}`}
      onClick={onClick}
    >
      <img className={styles.button_img} src={icon} alt="buttonIcon" />
    </button>
  );
};

export default ButtonIcon;
