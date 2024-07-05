import React from "react";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Footer from "./Components/Footer/Footer";
import FooterCover from "./Components/FooterCover/FooterCover";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
      <FooterCover />
    </>
  );
}

export default App;
