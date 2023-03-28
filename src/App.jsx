import { useState } from "react";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Headsets } from "./components/Headsets";
import { NavMobile } from "./components/NavMobile";
import { Testimonial } from "./components/Testimonial";
import { Video } from "./components/Video";

function App() {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute  lg:before:-top-12 before:-z-50">
      <Header setNavMobile={setNavMobile} />
      <Banner />

      <div
        className={`${
          navMobile ? "right-0" : "-right-[12rem]"
        } fixed top-0 bottom-0 w-48 transition-all ease-in-out duration-500`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
    </div>
  );
}

export default App;
