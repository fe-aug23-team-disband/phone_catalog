import React from "react";
import cn from "classnames";
import styles from "./MobileMenu.module.scss";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../Header/logo.png";
import menuCloseIcon from "./button-close.png";
import favoriteIcon from "../Header/button-heart.png";
import cartIcon from "../Header/button-shop.png";
type Props = {
  onClose: () => void;
};

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const menuItems = [
    { path: "/", label: "home" },
    { path: "/phones", label: "Phones" },
    { path: "/tablets", label: "tablets" },
    { path: "/accessories", label: "accessories" }
  ];

  const icons = [
    { icon: favoriteIcon, url: "/favourites", alt: "favourites", count: 7 },
    { icon: cartIcon, url: "/cart", alt: "cart", count: 10 }
  ];

  return (
    <nav className={styles.mobile_menu}>
      <header className={styles.mobile_menu_header}>
        <Link to="/">
          <img className={styles.mobile_menu_logo} src={logoImg} alt="logo" />
        </Link>
        <button
          onClick={() => {
            onClose();
          }}
          className={styles.mobile_menu_close}
        >
          <img src={menuCloseIcon} alt={"menu"} />
        </button>
      </header>
      <ul className={styles.mobile_menu_list}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.mobile_menu_item}>
            <NavLink
              onClick={() => {
                onClose();
              }}
              className={({ isActive }) =>
                cn(styles.mobile_menu_item_link, {
                  [styles.mobile_menu_item_link_active]: isActive
                })
              }
              to={item.path}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.mobile_menu_buttons_bottom }>
        {icons.map((item, index) => (
          <Link
            onClick={() => {
              onClose();
            }}
            key={index}
            to={item.url}
            className={styles.mobile_menu_button_link}
          >
            <span className={styles.header_icon_wrap}>
              <img src={item.icon} alt={item.alt} />
              {item.count && (
                <span className={styles.header_icon_count_bg}>
                  <span className={styles.header_icon_count}>{item.count}</span>
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
