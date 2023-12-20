import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
    </div>
  );
};

export default NavBar;
