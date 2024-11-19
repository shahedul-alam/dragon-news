import Marquee from "react-fast-marquee";

const HomeHeaderMarquee = () => {
  return (
    <section className="bg-gray-100 flex mb-5">
      <div className="bg-red-600 flex items-center rounded-l-md">
        <p className="text-white text-xl font-medium px-3">Latest</p>
      </div>
      <Marquee pauseOnHover={true} className="text-lg font-semibold py-2">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          quisquam iure. Rerum exercitationem inventore aperiam placeat
          explicabo nulla quia ea blanditiis eveniet vero, obcaecati ullam
          voluptate, doloribus, natus perspiciatis incidunt!
        </p>
      </Marquee>
    </section>
  );
};

export default HomeHeaderMarquee;
