import logo from "../assets/logo.png";
import moment from "moment";

const HomeHeader = () => {
  return (
    <header className="border border-red-600 container mx-auto mt-12">
      {/* dragon news logo and slogan section*/}
      <section className="flex flex-col justify-center items-center gap-2 mb-8 border">
        <div>
          <img src={logo} alt="dragon news logo" />
        </div>
        <p className="text-[#706F6F] text-lg">Journalism Without Fear or Favour</p>
        <p className="text-xl font-medium">{moment().format("dddd, MMMM Do YYYY")}</p>
      </section>
    </header>
  );
};

export default HomeHeader;
