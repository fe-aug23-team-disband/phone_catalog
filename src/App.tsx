import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Category } from "./components/Category/Category";

export const App = () => {
  return (
    <>
      <Header />
      <div className="main__wrapper">
        <Outlet />
        <Category />
        <Footer />
      </div>
    </>
  );
};
