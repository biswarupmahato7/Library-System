import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-green-500 h-16 w-full z-30 fixed ">
      <ul className="flex items-center justify-center h-16 font-bold text-2xl gap-20">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'underline text-white' : 'hover:underline transition duration-200'
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'underline text-white' : 'hover:underline duration-200'
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-books"
            className={({ isActive }) =>
              isActive ? 'underline text-white' : 'hover:underline duration-200'
            }
          >
            BOOKS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
