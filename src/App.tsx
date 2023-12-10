import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div className="main__wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
