import { createContext, useEffect } from "react";
import globalVariables from "../../static/variables";
import { useLocalStoregeTheme } from "./useLocalStoregeTheme";

type ThemeContextType = {
  theme: typeof globalVariables.themeDark | typeof globalVariables.themeLight;
  setTheme: React.Dispatch<
    React.SetStateAction<
      typeof globalVariables.themeDark | typeof globalVariables.themeLight
    >
  >;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: globalVariables.themeDark,
  setTheme: () => {}
});

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStoregeTheme(
    "theme",
    globalVariables.themeDark
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
