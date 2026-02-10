import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Login</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Header;
