import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import { Footer } from "../widgets/Footer/Footer";
import styles from "../styles/main.module.scss";

export const App = () => {
  return (
    <main className={styles.mainWrapper}>
      <Header />
      asdasasdadsdas
      <div className={styles.mainContent}>
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};
