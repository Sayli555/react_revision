import { Link } from "react-router";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        style={{ width: "50px" }}
        src={
          "https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg"
        }
        alt="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/"> Home</Link>{" "}
        </li>
        <li><Link to="/about"> About Us</Link>{" "}</li>
        <li><Link to="/contact-us"> Contact Us</Link>{" "}</li>
        <li><Link to="/cart"> Cart</Link>{" "}</li>
      </ul>
    </div>
  </div>
);

export default Header;
