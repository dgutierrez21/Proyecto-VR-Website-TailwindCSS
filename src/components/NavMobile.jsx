import { IoClose } from "react-icons/io5";

export const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-[#251f3f] h-full w-full">
      <IoClose
        className="text-3xl absolute left-4 top-6 cursor-pointer"
        onClick={() => setNavMobile(false)}
      />
      <ul className="font-secondary flex flex-col items-center h-full justify-center space-y-8">
        <li className="text-lg">
          <a href="#">Home</a>
        </li>
        <li className="text-lg">
          <a href="#">Company</a>
        </li>
        <li className="text-lg">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};
