import React, { useContext } from "react";
import "../../styles/utils/variables.scss";
import styles from "./MobileMenu.module.scss";
import spacer from "../../styles/flex_spacer.module.scss";
import { Link } from "react-router-dom";
import logoImg from "../../static/Header/logo.png";
import logoImgLight from "../../static/Header/logo_light.png";
import menuCloseIcon from "../../static/MobileMenu/button-close.png";
import menuCloseIconLight from "../../static/MobileMenu/button-close_light.png";
import favoriteIcon from "../../static/Header/button-heart.png";
import favoriteIconLight from "../../static/Header/heartIcon_light.png";
import cartIcon from "../../static/Header/button-shop.png";
import cartIconLight from "../../static/Header/button-shop_light.png";
import globalVariables from "../../static/variables";
import { cartSelector } from "../../app/store/slices/cart.slice";
import { wishlistSelector } from "../../app/store/slices/wishlist.slice";
import { useAppSelector } from "../../app/store/hooks";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { ThemeContext } from "../../app/providers/ThemeProvider";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

type Props = {
  onClose: () => void;
};

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { items: wishlistItems } = useAppSelector(wishlistSelector);
  const { items: cartItems } = useAppSelector(cartSelector);

  const menuItems = [
    { path: `${globalVariables.patchToHome}`, label: "home" },
    { path: `${globalVariables.patchToPhones}`, label: "phones" },
    { path: `${globalVariables.patchToTablets}`, label: "tablets" },
    { path: `${globalVariables.patchToAccessories}`, label: "accessories" }
  ];

  const icons = [
    {
      icon: `${
        theme === globalVariables.themeLight ? favoriteIconLight : favoriteIcon
      }`,
      url: "/favourites",
      alt: "favourites",
      count: wishlistItems.length
    },
    {
      icon: `${
        theme === globalVariables.themeLight ? cartIconLight : cartIcon
      }`,
      url: "/cart",
      alt: "cart",
      count: cartItems.length
    }
  ];

  return (
    <nav className={styles.mobile_menu}>
      <header className={styles.mobile_menu_header}>
        <Link
          onClick={() => {
            onClose();
          }}
          to="/"
        >
          <img
            className={styles.mobile_menu_logo}
            src={`${
              theme === globalVariables.themeLight ? logoImgLight : logoImg
            }`}
            alt="logo"
          />
        </Link>

        <div className={spacer.flex_spacer}></div>

        <div className={styles.mobile_menu_switch}>
          <ThemeSwitcher />
        </div>

        <button
          onClick={() => {
            onClose();
          }}
          className={styles.mobile_menu_close}
        >
          <img
            src={`${
              theme === globalVariables.themeLight
                ? menuCloseIconLight
                : menuCloseIcon
            }`}
            alt={"menu"}
          />
        </button>
      </header>

      <ul className={styles.mobile_menu_list}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.mobile_menu_item}>
            <NavLink
              onClick={() => {
                onClose();
              }}
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                cn(styles.mobile_menu_item_link, {
                  [styles.mobile_menu_item_link_active]: isActive
                })
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.mobile_menu_buttons_bottom}>
        {icons.map((item, index) => (
          <Link
            onClick={() => {
              onClose();
            }}
            key={index}
            to={item.url}
            className={styles.mobile_menu_button_link}
          >
            <span className={styles.mobile_menu_button_wrap}>
              <img src={item.icon} alt={item.alt} />
              {item.count !== 0 && (
                <span className={styles.mobile_menu_button_count_bg}>
                  <span className={styles.mobile_menu_button_count}>
                    {item.count}
                  </span>
                </span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
