import { Helmet } from "react-helmet";
import Banner from "../Components/LandingPage/Banner";
import Footer from "../Components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Home | Taskify</title>
      </Helmet>
      <Banner />
      <Footer />
    </div>
  );
};

export default LandingPage;
