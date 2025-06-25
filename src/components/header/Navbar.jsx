import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        toast.success("Log Out successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <nav className="sticky z-[999] top-0 navbar bg-white shadow-sm sm:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" lg:hidden pr-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a
          className="flex items-center text-xl sm:text-2xl font-semibold gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="" className="w-7 sm:w-10" />
          <h1 className="font-seconderyFont">
            Job<span className="text-[#2979BB]">Finder</span>
          </h1>
        </a>
      </div>

      <div className="navbar-end flex items-center gap-20">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
        </div>
        {user ? (
          <div className="flex gap-5 items-center">
            <div
              className="avatar avatar-online avatar-placeholder cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <div className="bg-neutral text-neutral-content w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="image" />
                ) : (
                  <span className="text-xl">
                    {(user?.displayName && user.displayName[0]) || "?"}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                className="btn btn-primary btn-sm sm:btn-md"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <a
              className="btn btn-primary btn-outline btn-sm sm:btn-md"
              onClick={() => navigate("/signup")}
            >
              Register
            </a>
            <a
              className="btn btn-primary btn-sm sm:btn-md"
              onClick={() => navigate("/login")}
            >
              Log In
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
