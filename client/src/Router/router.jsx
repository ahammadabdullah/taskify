import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages/Dashboard/Home";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;
