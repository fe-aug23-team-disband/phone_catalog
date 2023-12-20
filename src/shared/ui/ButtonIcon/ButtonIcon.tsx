import React from "react";
import styles from "./ButtonIcon.module.scss";
import classNames from "classnames";
interface ButtonIconsProps {
  icon: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  customStyles?: string;
  isDisabled?: boolean;
}

const ButtonIcon: React.FC<ButtonIconsProps> = ({
  icon,
  size = "medium",
  onClick,
  customStyles,
  isDisabled
}) => {
  const buttonSize =
    {
      small: styles.button_size_small,
      medium: styles.button_size_medium,
      large: styles.button_size_large
    }[size] || styles.button_size_small;

  return (
    <button
      className={classNames(
        `${styles.button_icon_wrapper} ${buttonSize} ${customStyles}`,
        {
          [styles.button_icon_wrapper__disabled]: isDisabled
        }
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <img className={styles.button_img} src={icon} alt="buttonIcon" />
    </button>
  );
};

export default ButtonIcon;
