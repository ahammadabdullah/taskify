import { Link } from "react-router-dom";
import image from "../../assets/banner.jpg";
import useAuth from "../../Hooks/useAuth";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  const { user } = useAuth();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative top-0 min-h-screen overflow-x-hidden">
      <img
        className="min-h-screen min-w-[700px]"
        src={image}
        alt="banner image"
      />
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className=" flex flex-col justify-center items-center text-white absolute lg:bottom-1/4 md:bottom-[15%] bottom-[30%]  right-1/3 lg:right-12 md:right-5 w-1/3  "
      >
        <h3 className="text-center text-3xl flex text-orange-500 md:text-white hover:text-white">
          Effortless Productivity with Taskify: Your Ultimate Task Management
          Solution
        </h3>
        {user ? (
          <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-orange-400 mt-3 hover:text-orange-600">
            <Link to={"/dashboard"}>Lets Explore</Link>
          </button>
        ) : (
          <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-orange-400 mt-3 hover:text-orange-600">
            <Link to={"/login"}>Lets Explore</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
