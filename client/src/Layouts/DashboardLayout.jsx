import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex max-h-screen overflow-y-hidden overflow-x-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
