import HomeLeftAside from "./HomeLeftAside";
import HomeMain from "./HomeMain";
import HomeRightAside from "./HomeRightAside";


const Homepage = () => {

  return (
    <main className="container mx-auto grid grid-cols-12 gap-6 mb-20">
      <HomeLeftAside />
      <HomeMain />
      <HomeRightAside />
    </main>
  );
};

export default Homepage;