import orangeLogo from "/Taskify-orange.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap lg:gap-10">
        <img className="w-[100px]" src={orangeLogo} alt="" />
        <div>
          <h3 className="md:text-lg text-base text-orange-500 flex items-center justify-center text-center flex-wrap">
            © 2023, All Rights Reserved. Designed & Created By{" "}
            <a
              className="font-bold pl-2"
              href="https://ahammad-abdullah.web.app/"
              target="_blank"
            >
              Ahammad Abdullah
            </a>{" "}
            .
            <a
              className="font-bold pl-2"
              href="https://github.com/ahammadabdullah"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="font-bold pl-2"
              href="https://www.linkedin.com/in/ahammad-abdullah/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="font-bold pl-2"
              href="ahammadabdullahnew@gmail.com"
              target="_blank"
            >
              <IoMail />
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
