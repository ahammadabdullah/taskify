import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import Logo from "./Logo/Logo";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((err) => toast.error(err));
  };
  const menuItems = ["Dashboard", "Log Out"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className={`hover:text-orange-500 ${
              location.pathname === "/" && "text-orange-500"
            }`}
            to="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`hover:text-orange-500 ${
              location.pathname === "/dashboard" && "text-orange-500"
            }`}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {user ? (
            <button
              onClick={handleLogout}
              className="py-[6px] px-3 bg-orange-200 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white"
            >
              Log Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="py-[6px] px-3 bg-orange-200 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white">
                Log in
              </button>
            </Link>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <Link
            className={`hover:text-orange-500 ${
              location.pathname === "/" && "text-orange-500"
            }`}
            to="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`hover:text-orange-500 ${
              location.pathname === "/dashboard" && "text-orange-500"
            }`}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
