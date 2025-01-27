import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getBookSelector  } from "../redux/slices/cartSlice";
const Navbar = () => {
  const book = useSelector(getBookSelector)
  console.log(book)
  return (
    <div className="bg-green-500 h-16 w-full z-30 fixed shadow-md">
      <div className="w-5/6 mx-auto flex justify-between items-center h-full">
        {/* Navigation Links */}
        <ul className="flex items-center font-bold text-xl gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline"
                  : "text-gray-200 hover:text-white hover:underline transition duration-200"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline"
                  : "text-gray-200 hover:text-white hover:underline transition duration-200"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-books"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline"
                  : "text-gray-200 hover:text-white hover:underline transition duration-200"
              }
            >
              BOOKS
            </NavLink>
          </li>
        </ul>

        {/* Cart Button */}
        <button className="flex items-center gap-2 text-white font-semibold text-lg bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
          <FaCartArrowDown className="text-2xl" />
          My Cart
          <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full">
            {book.length}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
