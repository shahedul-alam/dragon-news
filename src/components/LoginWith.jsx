import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div>
      <h2 className="text-xl text-[#403F3F] font-semibold">Login With</h2>
      <div className="p-5 space-y-4">
        <Link className="flex justify-center items-center gap-2 py-4 rounded-md bg-red-600 text-white text-lg font-medium border"><FaGoogle className="text-xl" /> Login with Google</Link>
        <Link className="flex justify-center items-center gap-2 py-4 rounded-md bg-stone-800 text-white text-lg font-medium border"><FaGithub className="text-xl" /> Login with Github</Link>
      </div>
    </div>
  );
};

export default LoginWith;