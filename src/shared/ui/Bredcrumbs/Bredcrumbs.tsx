import React, { useContext } from "react";
import styles from "./Bredcrumbs.module.scss";
import { Link, useLocation } from "react-router-dom";
import homeImg from "../../../static/Bredcrumbs/button-home.png";
import homeImg_light from "../../../static/Bredcrumbs/button-home_light.png";

import { ThemeContext } from "../../../app/providers/ThemeProvider";

const Bredcrumbs: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { theme } = useContext(ThemeContext);
  const res: string[] = [];

  pathname.split("/").map(path => {
    if (path !== "") {
      res.push(path);
    }
  });

  return (
    <div className={styles.bredcrumbs}>
      <Link to={"/"} className={styles.bredcrumbs_home_link}>
        <img
          className={styles.bredcrumbs_home_img}
          src={`${theme === "light" ? homeImg_light : homeImg}`}
          alt={"home_Img"}
        />
      </Link>

      {res.length !== 0 && (
        <>
          {res.map(item => {
            const normalizedName = item.split("-").join(" ");

            return (
              <div key={item} className={styles.bredcrumbs_wrap_patch}>
                <span className={styles.bredcrumbs_separator}></span>
                <Link to={`/${item}`}>{normalizedName}</Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Bredcrumbs;
