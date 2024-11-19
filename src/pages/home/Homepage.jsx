import HomeLeftAside from "../../components/HomeLeftAside";
import HomeMain from "../../components/HomeMain";
import HomeRightAside from "../../components/HomeRightAside";


const Homepage = () => {
  return (
    <main className="border border-red-600 container mx-auto grid grid-cols-12 gap-6">
      <HomeLeftAside />
      <HomeMain />
      <HomeRightAside />
    </main>
  );
};

export default Homepage;