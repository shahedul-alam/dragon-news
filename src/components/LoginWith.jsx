import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuth";

const LoginWith = () => {
  const {user, logInWithGoogle, logInWithGithub, successNotify, errorNotify} = useContext(AuthContext);

  const handleLoginWithGoogle = () => {
    logInWithGoogle()
    .then((result) => {
      successNotify('login with Google successfully!');
    })
    .catch((error) => {
      errorNotify(error.message);
    });
  };

  const handleLoginWithGithub = () => {
    logInWithGithub()
    .then((result) => {
      successNotify('login with Github successfully!');
    })
    .catch((error) => {
      errorNotify(error.message);
    });
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Login With</h2>
      <div className="space-y-4">
        <button className="w-full flex justify-center items-center gap-2 py-4 rounded-md bg-red-600 text-white text-lg font-medium border" onClick={handleLoginWithGoogle}>
          <FaGoogle className="text-xl" /> Login with Google
        </button>
        <button className="w-full flex justify-center items-center gap-2 py-4 rounded-md bg-stone-800 text-white text-lg font-medium border" onClick={handleLoginWithGithub}>
          <FaGithub className="text-xl" /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
