import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
//import { Blog } from "../modules/Blog/Blog";
import { Portfolio } from "../modules/Portfolio/Portfolio";
import { Footer } from "../components/Footer/Footer";
import NavBarComp from "../components/NavBar/NavBarComp";
import { MAIN_ROUTES } from "../constants/routes";
import { Curriculum } from "../modules/curriculum/Curriculum";

interface MainRoutesProps {
  isMobile: boolean;
}

export const MainRoutes = ({ isMobile }: MainRoutesProps) => {
  const { HOME, PORTFOLIO, CURRICULUM } = MAIN_ROUTES;
  const navTabs = [
    {
      id: 1,
      label: "Home",
      routePath: HOME,
    },
    {
      id: 2,
      label: "Portfolio",
      routePath: PORTFOLIO,
    },

    {
      id: 3,
      label: "Curriculum",
      routePath: CURRICULUM,
    },
  ];

  return (
    <BrowserRouter>
      {/* Header and navigation */}
      <NavBarComp pageName="Braulio Blog" tabItems={navTabs} />
      {/* Main Content */}
      <Home isMobile={isMobile} />
      <Portfolio isMobile={isMobile} />
      <Curriculum isMobile={isMobile} />
      {/* Footer and contact info */}
      <Footer />
    </BrowserRouter>
  );
};
