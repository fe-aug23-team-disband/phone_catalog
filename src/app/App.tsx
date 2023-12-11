import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import { Footer } from "../widgets/Footer/Footer";
import styles from "./main.module.scss";

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.mainWrapper}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
