import { IoLogoGoogle } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { googleLogin, signInWithEmailPass, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      toast.success("Successfully logged in");
      navigate(location?.state ? location.state : "/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleEmailLogin = async (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailPass(email, password)
      .then(() => {
        toast.success("Successfully logged in");
        navigate(location?.state ? location.state : "/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="bg-base-300 min-h-screen ">
      <Helmet>
        <title>Login | Edumi</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-20">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="md:w-2/4 w-[90%] bg-white text-center mx-auto"
        >
          <div className="w-3/4  mx-auto">
            {location?.state ? (
              <h3 className="text-3xl font-bold pt-20 pb-10 text-orange-500">
                You need to login first
              </h3>
            ) : (
              <h3 className="text-3xl font-bold pt-20 pb-10 text-orange-500">
                Login to your account
              </h3>
            )}

            <hr />
            <form onSubmit={handleSubmit(handleEmailLogin)} className="pt-10">
              <label className="block text-left">Email Address</label>
              <input
                {...register("email")}
                className="w-full rounded-lg bg-gray-100 py-5 pl-5 my-4 text-orange-500 focus:border-orange-500  focus:outline-orange-500 "
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <label className="block text-left">Password</label>
              <input
                {...register("password")}
                required
                className="w-full rounded-lg bg-gray-100 py-5 pl-5 my-4 text-orange-500 focus:border-orange-500  focus:outline-orange-500"
                type="password"
                name="password"
                placeholder="Password"
              />

              <button
                className="btn hover:bg-orange-200 hover:border-orange-500 hover:text-orange-500 rounded-lg w-full bg-orange-500 hover:border-2 hover:font-semibold  py-4 text-white my-4"
                type="submit"
              >
                {loading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <p className="pb-8">
              Dont’t Have An Account ?{" "}
              <Link
                state={location.state}
                to={"/register"}
                className=" font-bold hover:text-orange-500"
              >
                Register
              </Link>
            </p>

            <p className="border-t-2 w-[50%] mx-auto border-orange-500 pt-8 py-5">
              Continue With
            </p>
            <div className="pb-8">
              <button
                onClick={handleGoogleLogin}
                className="w-full py-4   border-2  bg-orange-200 hover:border-orange-500 hover:text-orange-500 rounded-lg  hover:border-2 hover:font-semibold "
              >
                {" "}
                {loading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <IoLogoGoogle /> <span className="font-bold">Google</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
