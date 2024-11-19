import logo from "../assets/logo.png";
import moment from "moment";

const HomeHeaderDetails = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-2 mb-8">
      <div>
        <img src={logo} alt="dragon news logo" />
      </div>
      <p className="text-[#706F6F] text-lg">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </section>
  );
}; 

export default HomeHeaderDetails;
