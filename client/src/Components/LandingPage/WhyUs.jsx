import wave from "../../assets/wave.svg";
import bankers from "../../assets/bankers.png";
import corporate from "../../assets/corporate.jpg";
import developer from "../../assets/developer.jpg";
const WhyUs = () => {
  return (
    <div className="max-w-7xl mx-auto relative overflow-x-hidden">
      <div className="w-full absolute z-10">
        <img className="min-w-[1000px] absolute -top-1" src={wave} alt="" />
        <h3 className="text-center absolute text-3xl text-white top-14 lg:right-[30%] md:right-[20%] px-6">
          Person who uses our website{" "}
        </h3>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="z-20 pt-[250px] flex flex-wrap justify-center mx-auto gap-10"
      >
        <div className="w-[340px] p-4 bg-orange-200 rounded-lg">
          <img
            className="w-full rounded-lg"
            src={bankers}
            alt="bankers image"
          />
          <div className="text-center text-orange-500 text-xl pt-2">
            <h3>Bankers</h3>
          </div>
        </div>
        <div className="w-[340px] p-4 bg-orange-200 rounded-lg">
          <img
            className="w-full rounded-lg"
            src={corporate}
            alt="corporate image"
          />
          <div className="text-center text-orange-500 text-xl pt-2">
            <h3>Corporate</h3>
          </div>
        </div>
        <div className="w-[340px] p-4 bg-orange-200 rounded-lg">
          <img
            className="w-full rounded-lg"
            src={developer}
            alt="developer image"
          />
          <div className="text-center text-orange-500 text-xl pt-2">
            <h3>Developers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
