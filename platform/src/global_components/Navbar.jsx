import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex">
        <ul className="flex gap-4 place-content-center">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
