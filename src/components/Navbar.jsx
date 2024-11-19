import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className=""></div>
      <div className="flex gap-4 text-lg">
        <NavLink to="/">
          <span className="hover:text-red-600 hover:font-medium hover:underline">
            Home
          </span>
        </NavLink>
        <NavLink to="/about">
          <span className="hover:text-red-600 hover:font-medium hover:underline">
            About
          </span>
        </NavLink>
        <NavLink to="/career">
          <span className="hover:text-red-600 hover:font-medium hover:underline">
            Career
          </span>
        </NavLink>
      </div>
      <div className="flex gap-2">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
            alt="User's profile picture"
            className="size-10 object-cover rounded-full"
          />
        </div>
        <button className="bg-[#403F3F] px-6 text-xl font-semibold text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
