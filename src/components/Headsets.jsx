import hs1 from "../assets/img/headset-1.png";
import hs2 from "../assets/img/headset-2.png";
import hs3 from "../assets/img/headset-3.png";
import hs4 from "../assets/img/headset-4.png";

export const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="font-bold text-3xl mb-6">Mixed Reality Headsets</h2>

        <div className="grid gap-y-4 lg:gap-9 lg:grid-cols-2">
          <div className="relative lg:hover:scale-105 transition-transform duration-300">
            <img src={hs1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md min-h-[150px] max-w-[300px] p-6 rounded-tr-xl">
              <h4 className="text-xl font-semibold mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis rem veritatis nemo quia soluta. Voluptas?
              </p>
            </div>
          </div>
          <div className="relative lg:hover:scale-105 transition-transform duration-300">
            <img src={hs2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md min-h-[150px] max-w-[300px] p-6 rounded-tr-xl">
              <h4 className="text-xl font-semibold mb-2">AIoT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis rem veritatis nemo quia soluta. Voluptas?
              </p>
            </div>
          </div>
          <div className="relative lg:hover:scale-105 transition-transform duration-300">
            <img src={hs3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md min-h-[150px] max-w-[300px] p-6 rounded-tr-xl">
              <h4 className="text-xl font-semibold mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis rem veritatis nemo quia soluta. Voluptas?
              </p>
            </div>
          </div>
          <div className="relative lg:hover:scale-105 transition-transform duration-300">
            <img src={hs4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md min-h-[150px] max-w-[300px] p-6 rounded-tr-xl">
              <h4 className="text-xl font-semibold mb-2">TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis rem veritatis nemo quia soluta. Voluptas?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
