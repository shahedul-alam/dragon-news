import HomeHeaderDetails from "./HomeHeaderDetails";
import HomeHeaderMarquee from "./HomeHeaderMarquee";
import Navbar from "./Navbar";

const HomeHeader = () => {
  return (
    <header className="container mx-auto mt-12 mb-[72px]">
      {/* dragon news logo and slogan section*/}
      <HomeHeaderDetails />
      {/* marquee section */}
      <HomeHeaderMarquee />
      {/* navbar section */}
      <Navbar />
    </header>
  );
};

export default HomeHeader;
