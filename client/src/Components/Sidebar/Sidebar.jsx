import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import Logo from "../Logo/Logo";
const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        toast.success("Logged out successfully");
      })
      .catch((err) => toast.error(err));
  };
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="max-h-screen">
      <div className="bg-orange-100 h-20 text-gray-800 flex justify-between lg:hidden w-full">
        <div>
          <div className="block !w-32 cursor-pointer p-4 font-bold">
            <img src="/Taskify-orange.png" alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className=" p-4 focus:outline-none hover:text-orange-500 font-bold"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10  inset-y-0 fixed  left-0 overflow-x-hidden flex flex-col justify-between bg-orange-100 w-[320px] h-full transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col  items-center pt-10  ">
          <div className="w-1/2 hidden lg:block">
            <img src="/Taskify-orange.png" alt="" />
          </div>
          <NavLink
            className={`py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 ${
              location.pathname === "/dashboard" && "text-orange-500"
            }`}
            to={"/dashboard"}
          >
            dashboard
          </NavLink>
          <NavLink
            className={`py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 ${
              location.pathname === "/dashboard/profile" && "text-orange-500"
            }`}
            to={"/dashboard/profile"}
          >
            Profile
          </NavLink>
        </div>
        <div className="flex flex-col  items-center pt-10 mb-10">
          <NavLink
            className={`py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 ${
              location.pathname === "/" && "text-orange-500"
            }`}
            to={"/"}
          >
            Back to Home
          </NavLink>
          <button
            onClick={handleLogout}
            className={
              "py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 "
            }
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
