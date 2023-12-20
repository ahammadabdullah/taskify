import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/dashboard"}>dashboard</NavLink>
    </div>
  );
};

export default Sidebar;
