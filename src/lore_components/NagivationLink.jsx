/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavigationLink = ({ to, label }) => {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavigationLink;
