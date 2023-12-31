import { Outlet, useLocation } from "react-router-dom";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import styles from "../styles/main.module.scss";
import Bredcrumbs from "../shared/ui/Bredcrumbs/Bredcrumbs";
import { ThemeProvider } from "./providers/ThemeProvider";

export const App = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ThemeProvider>
      <div className={styles.appWrapper}>
        <Header />
        <main className={styles.mainWrapper}>
          {pathname !== "/" && pathname !== "/cart" && <Bredcrumbs />}
          <div className={styles.mainContent}>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
