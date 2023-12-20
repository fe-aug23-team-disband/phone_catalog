import globalVariables from "../../static/variables";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logoImg from "../../static/Header/logo.png";
import logoImg_light from "../../static/Header/logo_light.png";
import favoriteIcon from "../../static/Header/button-heart.png";
import favoriteIcon_light from "../../static/ItemCard/heartIcon_light.png";
import lightThemeIcon from "../../static/Header/themeLightIcon.svg";
import darkThemeIcon from "../../static/Header/themeDarkIcon.svg";
import cartIcon from "../../static/Header/button-shop.png";
import cartIcon_light from "../../static/Header/button-shop_light.png";
import menuIcon from "../../static/Header/button-burger-menu.png";
import menuIconLight from "../../static/Header/button-burger-menu_light.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useAppSelector } from "../../app/store/hooks";
import { useContext, useState } from "react";
import { cartSelector } from "../../app/store/slices/cart.slice";
import { wishlistSelector } from "../../app/store/slices/wishlist.slice";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { ThemeContext } from "../../app/providers/ThemeProvider";

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
  const { theme, setTheme } = useContext(ThemeContext);

  const icons = [
    {
      icon: `${theme === globalVariables.themeLight ? favoriteIcon_light : favoriteIcon}`,
      url: "/favourites",
      alt: "favourites",
      count: wishlistItems.length
    },
    {
      icon: `${theme === globalVariables.themeLight ? cartIcon_light : cartIcon}`,
      url: "/cart",
      alt: "cart",
      count: cartItems.length
    }
  ];

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const hanlerChangeTheme = () => {
    setTheme(theme === globalVariables.themeDark ? globalVariables.themeLight : globalVariables.themeDark);
  };

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.header_logo} to="/">
          <img className={styles.header_logo_img} src={`${theme === globalVariables.themeLight ? logoImg_light : logoImg}`} alt="logo" />
        </Link>
        <div className={styles.header_inside_wrapper}>
          <nav className={styles.header_nav}>
            <ul className={styles.header_nav__list}>
              {navItems.map(item => (
                <li className={styles.header_nav__item} key={item.label}>
                  <NavLink
                    className={({ isActive }) =>
                      cn(styles.header_nav__link, {
                        [styles.header_nav__link_active]: isActive
                      })
                    }
                    key={item.label}
                    to={item.path}
                  >
                    {" "}
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.header_icons}>
            <div
              onClick={hanlerChangeTheme}
              className={styles.header_icons_link}
            >
              <span className={styles.header_icon_wrap}>
                <img src={`${theme === globalVariables.themeLight ? darkThemeIcon : lightThemeIcon}`} alt={"theme"} />
              </span>
            </div>
            {icons.map((item, index) => (
              <NavLink
                key={index}
                to={item.url}
                className={({ isActive }) =>
                  cn(styles.header_icons_link, {
                    [styles.header_icons_link_active]: isActive
                  })
                }
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
              </NavLink>
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
            <img src={`${theme === globalVariables.themeLight ? menuIconLight : menuIcon}`} alt={"menu"} />
          </span>
        </button>
      </header>

      {isOpenMenu && <MobileMenu onClose={handleCloseMenu} />}
    </>
  );
};
export default Header;
