import Logo from "../assets/img/logo.svg";

import { HiMenu } from "react-icons/hi";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/">
            <img src={Logo} alt="" className="h-[30px]" />
          </a>

          <Nav />

          <HiMenu className="text-3xl text-white lg:hidden cursor-pointer"/>
        </div>
      </div>
    </header>
  );
};
