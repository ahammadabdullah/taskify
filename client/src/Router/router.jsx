import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages/Dashboard/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
    ],
  },
]);
export default router;
