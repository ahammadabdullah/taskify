import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
