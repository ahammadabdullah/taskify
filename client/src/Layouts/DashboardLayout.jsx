import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
