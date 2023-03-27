import { useState } from "react";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { NavMobile } from "./components/NavMobile";

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
    </div>
  );
}

export default App;
