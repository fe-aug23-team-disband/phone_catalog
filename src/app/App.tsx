import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import styles from "../styles/main.module.scss";

export const App = () => {
  return (
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
  );
};
