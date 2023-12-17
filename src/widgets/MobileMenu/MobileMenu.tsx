import React from "react";
import "../../styles/utils/variables.scss";
import styles from "./MobileMenu.module.scss";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../static/Header/logo.png";
import menuCloseIcon from "../../static/MobileMenu/button-close.png";
import favoriteIcon from "../../static/Header/button-heart.png";
import cartIcon from "../../static/Header/button-shop.png";
import globalVariables from "../../static/variables";
import { cartSelector } from "../../app/store/slices/cart.slice";
import { wishlistSelector } from "../../app/store/slices/wishlist.slice";
import { useAppSelector } from "../../app/store/hooks";

type Props = {
  onClose: () => void;
};

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
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
      icon: favoriteIcon,
      url: "/favourites",
      alt: "favourites",
      count: wishlistItems.length
    },
    {
      icon: cartIcon,
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
            <Link
              onClick={() => {
                onClose();
              }}
              key={item.label}
              to={item.path}
              className={`${styles.mobile_menu_item_link} ${(category ===
                null &&
                item.path === "/") ||
                (category === item.label.toLowerCase() &&
                  styles.mobile_menu_item_link_active)}`}
            >
              {item.label}
            </Link>
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
