import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://taskify-mocha-one.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
