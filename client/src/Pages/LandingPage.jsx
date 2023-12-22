import { Helmet } from "react-helmet";
import Banner from "../Components/LandingPage/Banner";
import Footer from "../Components/LandingPage/Footer";
import WhyUs from "../Components/LandingPage/WhyUs";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Home | Taskify</title>
      </Helmet>
      <Banner />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
