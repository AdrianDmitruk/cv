import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components";
import { FC } from "react";

const MainLayout: FC = () => {
  return (
    <div className="site-container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
