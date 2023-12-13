import React from "react";
import styles from "./ButtonIcon.module.scss";
interface ButtonIconsProps {
  icon: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const ButtonIcon: React.FC<ButtonIconsProps> = ({
  icon,
  size = "medium",
  onClick
}) => {
  const buttonSize =
    {
      small: styles.button_size_small,
      medium: styles.button_size_medium,
      large: styles.button_size_large
    }[size] || styles.button_size_small;

  return (
    <div
      className={`${styles.button_icon_wrapper} ${buttonSize}`}
      onClick={onClick}
    >
      <img className={styles.button_img} src={icon} alt="buttonIcon" />
    </div>
  );
};

export default ButtonIcon;
