import styles from "./Header.module.scss";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import logoImg from "./logo.png";
import favoriteIcon from "./button-heart.png";
import cartIcon from "./button-shop.png";
// import menuIcon from "./button-burger-menu.png";
// public\images\icons\button-heart.png
// import logoImg2 from "../../../public/images/logo.png";

const Header = () => {
  const navItems = [
    { label: "home", to: "/" },
    { label: "Phones", to: "phones" },
    { label: "tablets", to: "tablets" },
    { label: "accessories", to: "accessories", dataQa: "hover" }
  ];

  const icons = [
    { icon: favoriteIcon, url: "/favourites", alt: "favourites", count: 7 },
    { icon: cartIcon, url: "/cart", alt: "cart" }
  ];

  return (
    <header className={styles.header}>
      <Link className={styles.header_logo} to="/">
        <img className={styles.header_logo_img} src={logoImg} alt="logo" />
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
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.header_icons}>
          {icons.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className={styles.header_icons_link}
            >
              <span className={styles.header_icon_wrap}>
                <img src={item.icon} alt={item.alt} />
                {item.count && (
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

      {/* <div className={styles.header_menu}>
        <Link to={"#menu"} className={styles.header_icons_link}>
          <span className={styles.header_icon_wrap}>
            <img src={menuIcon} alt={"menu"} />
          </span>
        </Link>
      </div> */}

      {/* //menu */}

    </header>
  );
};
export default Header;
