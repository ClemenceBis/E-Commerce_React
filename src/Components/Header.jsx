import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";


function Header() {
  return (
    <div className="flex justify-around bg-gray-100 p-8">
      <h1 className="text-3xl font-extrabold text-light">SHOP</h1>
      <nav className="flex gap-10 text-lg">
        <Link to="/home" className="hover:text-light">Home</Link>
        <Link to="/products" className="hover:text-light">Products</Link>
        <Link to="/about" className="hover:text-light">About</Link>
        <Link to="/contact" className="hover:text-light">Contact</Link>
      </nav>

      <div className="flex align-end gap-10">
        <Link to="/">
          <FiUser className="cursor-pointer text-2xl hover:text-light" />
        </Link>

        <Link to="/cart">
          <FiShoppingCart className="cursor-pointer text-2xl hover:text-light" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
