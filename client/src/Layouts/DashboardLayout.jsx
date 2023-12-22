import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative lg:flex max-h-screen ">
      <Sidebar />
      <div className="flex-1 lg:ml-[320px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
