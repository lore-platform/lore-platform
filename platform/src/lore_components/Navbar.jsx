import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import LoreLogo from "../assets/logo.png";
import NavigationLink from "./NagivationLink";

export const Navbar = () => {
  return (
    <>
      <nav className="grid grid-cols-3 mb-3 justify-between items-center">
        <Link to="/">
          <img
            className="min-w-0.5"
            src={LoreLogo}
            alt="LORE Company Logo"
            id="loreLogo"
          />
        </Link>
        <SearchBar />
        <ul className="flex justify-end gap-4 place-content-center">
          <NavigationLink to="/login" label="Login" />
          <NavigationLink to="/signup" label="Signup" />
        </ul>
      </nav>
    </>
  );
};
