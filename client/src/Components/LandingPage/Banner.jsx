import { Link, Navigate, useNavigation } from "react-router-dom";
import image from "../../assets/banner.jpg";
import useAuth from "../../Hooks/useAuth";
const Banner = () => {
  const { user } = useAuth();

  return (
    <div className="relative top-0">
      <img src={image} alt="banner image" />
      <div className=" flex flex-col justify-center text-white absolute lg:bottom-1/3 bottom-3 md:bottom-1/4 right-3 lg:right-12 md:right-5 w-1/3 ">
        <h3 className="text-center lg:text-3xl flex ">
          Effortless Productivity with Taskify: Your Ultimate Task Management
          Solution
        </h3>
        {user ? (
          <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-orange-400 mt-3">
            <Link to={"/dashboard"}>Lets Explore</Link>
          </button>
        ) : (
          <button className="py-[6px] px-3 rounded-md text-base md:text-xl bg-orange-400 mt-3">
            <Link to={"/login"}>Lets Explore</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
