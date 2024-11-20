import fbLogo from "../assets/fb.png";
import instaLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";

const FindUsOn = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Find Us On</h2>
      <div>
        <div className="flex justify-start items-center gap-2 p-4 border rounded-t-md">
          <div className="flex justify-center items-center border size-7 rounded-full">
            <img src={fbLogo} alt="facebook icon" />
          </div>
          <p className="text-[#706F6F] font-medium">Facebook</p>
        </div>
        <div className="flex justify-start items-center gap-2 p-4 border-x">
          <div className="flex justify-center items-center border size-7 rounded-full">
            <img src={instaLogo} alt="instagram icon" />
          </div>
          <p className="text-[#706F6F] font-medium">Instagram</p>
        </div>
        <div className="flex justify-start items-center gap-2 p-4 border rounded-b-md">
          <div className="flex justify-center items-center border size-7 rounded-full">
            <img src={twitterLogo} alt="twitter icon" />
          </div>
          <p className="text-[#706F6F] font-medium">Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
