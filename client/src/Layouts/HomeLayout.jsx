import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/LandingPage/Footer";

const HomeLayout = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
