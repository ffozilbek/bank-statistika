import { Link, useLocation } from "react-router";
import { FolderPlusIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="h-[100vh] bg-blue-800 top-0 left-0 py-8 px-4">
      <Link
        to="/"
        className="text-white font-bold mb-5 block hover:opacity-80 transition-opacity duration-75 ease-linear"
      >
        LOGO
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
