export const Explore = () => {
  return (
    <section className="min-h-[400px] mb-16 lg:mb-4 ">
      <div className="container mx-auto h-full">
        <div className="bg-explore bg-no-repeat bg-cover h-full p-14">
          <h3
            className="font-semibold text-3xl mb-8"
            data-aos="fade-right"
            data-aos-offset="1000"
          >
            Explore product in new way
          </h3>
          <p
            className="mb-12 max-w-xs"
            data-aos="fade-right"
            data-aos-offset="1000"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            doloribus facere quidem vel incidunt tenetur temporibus repellat
            fugiat ducimus explicabo.
          </p>
          <form
            action=""
            className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0"
            data-aos="fade-right"
            data-aos-offset="750"
            data-aos-delay="800"
          >
            <input
              type="text"
              placeholder="Your email"
              className="bg-gradient-to-t from-[#341D38] to-[#271223] h-12 outline-none outline-2 focus:outline-purple-600 px-4 rounded-md"
            />
            <button className="btn">Start</button>
          </form>
        </div>
      </div>
    </section>
  );
};
