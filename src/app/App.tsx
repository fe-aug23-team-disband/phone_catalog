import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import styles from "../styles/main.module.scss";
import { ItemPage } from "../pages/ItemPage/ItemPage";

export const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main id={"top"} className={styles.mainWrapper}>
        <div className={styles.mainContent}>
          <Outlet />

          <ItemPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};
