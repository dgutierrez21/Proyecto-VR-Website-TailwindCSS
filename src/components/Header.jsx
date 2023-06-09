import Logo from "../assets/img/logo.svg";

import { HiMenu } from "react-icons/hi";
import { Nav } from "./Nav";

export const Header = ({ setNavMobile }) => {
  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="1500" >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/">
            <img src={Logo} alt="" className="h-[30px]" />
          </a>

          <Nav />

          <HiMenu
            className="text-3xl text-white lg:hidden cursor-pointer"
            onClick={() => setNavMobile(true)}
          />
        </div>
      </div>
    </header>
  );
};
