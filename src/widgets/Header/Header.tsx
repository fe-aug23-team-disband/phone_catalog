import globalVariables from "../../static/variables";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../static/Header/logo.png";
import favoriteIcon from "../../static/Header/button-heart.png";
import cartIcon from "../../static/Header/button-shop.png";
import menuIcon from "../../static/Header/button-burger-menu.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useAppSelector } from "../../app/store/hooks";
import { useState } from "react";
import { cartSelector } from "../../app/store/slices/cart.slice";
import { wishlistSelector } from "../../app/store/slices/wishlist.slice";

const navItems = [
  { path: `${globalVariables.patchToHome}`, label: "home" },
  { path: `${globalVariables.patchToPhones}`, label: "phones" },
  { path: `${globalVariables.patchToTablets}`, label: "tablets" },
  { path: `${globalVariables.patchToAccessories}`, label: "accessories" }
];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { items: wishlistItems } = useAppSelector(wishlistSelector);
  const { items: cartItems } = useAppSelector(cartSelector);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

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
      count: cartItems.length}
  ];

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.header_logo} to="/">
          <img className={styles.header_logo_img} src={logoImg} alt="logo" />
        </Link>
        <div className={styles.header_inside_wrapper}>
          <nav className={styles.header_nav}>
            <ul className={styles.header_nav__list}>
              {navItems.map(item => (
                <li className={styles.header_nav__item} key={item.label}>
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`${styles.header_nav__link} ${
                      (category === null && item.path === "/") ||
                      category === item.label.toLowerCase()
                        ? styles.header_nav__link_active
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.header_icons}>
            {icons.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className={`${styles.header_icons_link} ${
                  item.url === location.pathname ? styles.header_icons_link_active : "yo"
                }`}
              >
                <span className={styles.header_icon_wrap}>
                  <img src={item.icon} alt={item.alt} />
                  {item.count !== 0 && (
                    <span className={styles.header_icon_count_bg}>
                      <span className={styles.header_icon_count}>
                        {item.count}
                      </span>
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
          className={styles.header_menu}
        >
          <span className={styles.header_icon_wrap}>
            <img src={menuIcon} alt={"menu"} />
          </span>
        </button>
      </header>

      {isOpenMenu && <MobileMenu onClose={handleCloseMenu} />}
    </>
  );
};
export default Header;
