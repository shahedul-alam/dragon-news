import { useContext } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseAuth";
import demoUser from "../assets/user.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleSignOutUser = () => {
    signOutUser()
    .then(() => {
      console.log('logout successfully');
      navigate('/signIn');
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <nav className="flex justify-between items-center">
      <div className=""></div>
      <div className="flex gap-4 text-lg">
        <NavLink to={id ? `/category/${id}` : '/category/01'}>
          <span className="hover:font-medium hover:underline">
            Home
          </span>
        </NavLink>
        <NavLink to="/about">
          <span className="hover:font-medium hover:underline">
            About
          </span>
        </NavLink>
        <NavLink to="/career">
          <span className="hover:font-medium hover:underline">
            Career
          </span>
        </NavLink>
      </div>
      <div className="flex gap-2">
        <div>
          <img
            src={user ? user.photoURL : demoUser}
            alt="User's profile picture"
            className="size-12 object-cover rounded-full"
          />
        </div>
        {
          user ? 
          <button className="flex items-center justify-center bg-green-600 px-6 text-xl font-semibold text-white rounded-md" onClick={handleSignOutUser}>
            Logout
          </button> :
          <Link className="flex items-center justify-center bg-red-600 px-6 text-xl font-semibold text-white rounded-md" to={'/signIn'}>
            Login
          </Link>
        }
      </div>
    </nav>
  );
};

export default Navbar;
