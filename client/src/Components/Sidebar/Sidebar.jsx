import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
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
  return (
    <div className="flex flex-col justify-between bg-orange-100 w-[320px]">
      <div className="flex flex-col  items-center pt-10  ">
        <div className="w-1/2">
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
  );
};

export default Sidebar;
