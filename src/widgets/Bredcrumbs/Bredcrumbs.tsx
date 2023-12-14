import React from "react";
import styles from "./Bredcrumbs.module.scss";
import { Link, useLocation } from "react-router-dom";
import homeImg from "../../static/Bredcrumbs/button-home.png";

const Bredcrumbs: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const pathname = location.pathname;
  const modifiedPathSlice = pathname ? pathname.slice(1) : null;

  return (
    <div className={styles.bredcrumbs}>
      <Link to={"/"} className={styles.bredcrumbs_home_link}>
        <img className={styles.bredcrumbs_home_img} src={homeImg} alt={"home_Img"} />
      </Link>

      {pathname !== "/products" && pathname !== "/" && (
        <div className={styles.bredcrumbs_wrap_patch}>
          <span className={styles.bredcrumbs_separator}></span>
          <Link to={pathname}>{modifiedPathSlice}</Link>
        </div>
      )}

      {category && (
        <div className={styles.bredcrumbs_wrap_patch}>
          <span className={styles.bredcrumbs_separator}></span>
          <Link to={`/products?category=${category}`}>{category}</Link>
        </div>
      )}
    </div>
  );
};

export default Bredcrumbs;
