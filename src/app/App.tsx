import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import styles from "../styles/main.module.scss";
import { ItemCard } from "../entities/ItemCard/ItemCard";
import phones from "../widgets/Slider/phones.json";

export const App = () => {
  const phone = phones[0];

  return (
    <div className={styles.appWrapper}>
      <Header />
      <main id={"top"} className={styles.mainWrapper}>
        <div className={styles.mainContent}>
          <ItemCard phone={phone} />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
