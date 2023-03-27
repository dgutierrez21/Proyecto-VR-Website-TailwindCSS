import Img from "../assets/img/banner-img.svg";
import { Users } from "./Users";

export const Banner = () => {
  return (
    <section className="min-h-[600px] text-center pt-12 pb-12 lg:pt-14 lg:pb-24 lg:text-left relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="">
            <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
              Let's Explore <br />
              Three-Dimensional Visually.
            </h1>
            <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              accusamus doloremque adipisci doloribus accusantium nobis.
            </p>

            <div className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:max-w-none lg:mx-0 lg:justify-start">
              <button className="btn">Get it now</button>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Explore Device
              </a>
            </div>

            <Users />
          </div>

          <div className="">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
