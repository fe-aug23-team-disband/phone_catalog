import { createContext, useEffect } from "react";
import { useLocalStorageTheme } from "./useLocalStorageTheme";
import globalVariables from "../../static/variables";

interface ThemeContextType {
  theme: typeof globalVariables.themeDark | typeof globalVariables.themeLight;
  setTheme: React.Dispatch<
    React.SetStateAction<
      typeof globalVariables.themeDark | typeof globalVariables.themeLight
    >
  >;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: globalVariables.themeDark,
  setTheme: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStorageTheme(
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
