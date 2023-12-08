import React, { useEffect, useState } from "react";
import { MainRoutes } from "./router/MainRoutes";
import { ParticleBg } from "./components/ParticleBg/ParticleBg";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth / window.innerHeight <= 3 / 4
  );

  // Function to handle window resize events and determine if the screen has a mobile-like (vertical) or desktop-like (horizontal) aspect ratio
  const handleResize = () => {
    setIsMobile(window.innerWidth / window.innerHeight <= 3 / 4);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App" style={{ position: "relative" }}>
      <h1 style={{ display: "none" }}>
        Braulio Estrada - Posicionamiento SEO para desarrollo web con javascript
      </h1>
      <h2 style={{ display: "none" }}>
        Aparecer numero 1 en Google para programadores y desarrolladores de
        software
      </h2>
      <ParticleBg />
      <MainRoutes isMobile={isMobile} />
    </div>
  );
}

export default App;
