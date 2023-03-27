import { useState } from "react";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { NavMobile } from "./components/NavMobile";

function App() {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <>
      <Header setNavMobile={setNavMobile} />
      <Banner />

      <div
        className={`${
          navMobile ? "right-0" : "-right-[12rem]"
        } fixed top-0 bottom-0 w-48 transition-all ease-in-out duration-500`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
    </>
  );
}

export default App;
