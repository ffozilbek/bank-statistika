import { Link, useLocation } from "react-router";
import { FolderPlusIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 h-full bg-blue-800 py-8 px-4">
      <Link
        to="/"
        className="text-blue-300 text-xl font-bold mb-2 block hover:opacity-80 transition-opacity duration-75 ease-linear text-center text-shadow-lg/20"
      >
        C<span className="text-blue-100">Flow</span>
      </Link>
      <Link
        to="/add_data"
        className={`group w-[50px] h-[50px] flex items-center justify-center rounded-md font-bold mb-5 hover:bg-white hover:shadow-lg transition-color duration-75 ease-linear ${
          location.pathname !== "/add_data" ? "" : "bg-white"
        }`}
      >
        <FolderPlusIcon
          className={`h-6 w-6 transition-colors duration-200 ${
            location.pathname !== "/add_data"
              ? "text-white group-hover:text-blue-900"
              : "text-blue-900"
          }`}
          aria-hidden="true"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
