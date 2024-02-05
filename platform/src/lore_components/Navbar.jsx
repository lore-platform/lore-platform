import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import "../styles/index.scss";

export const Navbar = () => {
  return (
    <>
      <nav className="grid grid-cols-3 mb-3 justify-between items-center">
        <img
          className="min-w-0.5"
          src="./src/assets/logo.png"
          alt="image of the the LORE logo"
          id="loreLogo"
        />
        <SearchBar />
        <ul className="flex justify-end gap-4 place-content-center">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
