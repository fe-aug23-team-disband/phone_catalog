import { useContext } from "react";
import globalVariables from "../../static/variables";
import styles from "./ThemeSwitcher.module.scss";
import { ThemeContext } from "../../app/providers/ThemeProvider";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === globalVariables.themeDark ? globalVariables.themeLight : globalVariables.themeDark);
  };

  return (
    <div className={styles.container}>
      <div className={styles.theme_switcher}>
        <label className={styles.theme_switcher__label}>
          <input
            type="checkbox"
            className={styles.theme_switcher__input}
            onClick={handleThemeChange}
            checked={theme === globalVariables.themeLight}
          />
          <span className={styles.theme_switcher__slider} />
        </label>
      </div>
    </div>
  );
};
