import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../config/config.firebase";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createAccWithEmailPass, loading, setLoading } = useAuth();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const handleRegister = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const photoURL = data.photo;

    createAccWithEmailPass(email, password, name, photoURL)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(async () => {
            toast.success("Successfully account created");
            setLoading(false);
            navigate(location?.state ? location.state : "/dashboard");
          })
          .catch((err) => toast.error(err.message))
      )
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="bg-base-300  ">
        <Helmet>
          <title>Register | Taskify</title>
        </Helmet>
        <div className="max-w-7xl mx-auto pt-20">
          <div className="pb-20">
            <div className="md:w-2/4 w-[90%] bg-white text-center mx-auto ">
              <div className="w-3/4 mx-auto">
                <h3 className="text-3xl font-bold pt-20 pb-10 text-orange-500">
                  Register your account
                </h3>
                <hr />
                <form onSubmit={handleSubmit(handleRegister)} className="pt-10">
                  <label className="block text-left">Your Name</label>
                  <input
                    {...register("name")}
                    required
                    className="w-full rounded-lg bg-gray-100 py-5 pl-5 my-4 focus:outline-orange-500 text-orange-500"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <label className="block text-left">photo URL</label>
                  <input
                    {...register("photo")}
                    required
                    className="w-full rounded-lg bg-gray-100 py-5 pl-5 my-4 focus:outline-orange-500 text-orange-500"
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                  />
                  <label className="block text-left">Email Address</label>
                  <input
                    {...register("email")}
                    className="w-full rounded-lg bg-gray-100 py-5 pl-5 my-4 focus:outline-orange-500 text-orange-500"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <label className="block text-left">Password</label>
                  <input
                    {...register("password")}
                    className="w-full rounded-lg bg-gray-100 py-5 pl-5 my-4 focus:outline-orange-500 text-orange-500"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />

                  <button
                    className="btn  hover:bg-orange-200 hover:border-orange-500 hover:text-orange-500 rounded-lg w-full bg-orange-500 hover:border-2 hover:font-semibold  py-4 text-white my-4"
                    type="submit"
                  >
                    {loading ? (
                      <ImSpinner9 className="m-auto animate-spin" size={24} />
                    ) : (
                      "Register"
                    )}{" "}
                  </button>
                </form>
                <p className="py-8">
                  Already Have An Account ?{" "}
                  <Link
                    to={"/login"}
                    className=" font-bold hover:text-orange-500"
                  >
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
