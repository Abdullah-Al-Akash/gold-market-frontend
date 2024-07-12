import { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Pages/firebase/firebase.config";
import Swal from "sweetalert2";

const auth = getAuth(app);

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const handleImageClick = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuVisible]);

  useEffect(() => {
    setIsMenuVisible(false);
  }, [location]);

  //   Logout:
  const logOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Done",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const navItems = (
    <>
      <li className="brand-color">
        <Link to="/" className="font-semibold text-lg nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          Buy Gold
        </Link>
      </li>
      <li className="brand-color">
        <Link to="/" className="font-semibold text-lg nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
            />
          </svg>
          Sell Gold
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-black border-warning border-b-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline btn-warning lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-warning text-2xl">
            G<span className="text-white text-sm mt-2">old</span> M{" "}
            <span className="text-white text-sm mt-2">arket</span>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end relative">
          {user?.email ? (
            <>
              <div className="avatar online">
                <div className="w-12 rounded-full hover:cursor-pointer">
                  <img
                    src="https://avatarfiles.alphacoders.com/838/83876.jpg"
                    onClick={handleImageClick}
                  />
                </div>
              </div>
              {isMenuVisible && (
                <ul
                  ref={menuRef}
                  className="absolute right-0 top-10 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50"
                >
                  <li className="p-2 border-b border-gray-700">
                    <Link to="/profile" className="block text-white">
                      Profile
                    </Link>
                  </li>
                  <li className="p-2 border-b border-gray-700">
                    <Link to="/settings" className="block text-white">
                      Settings
                    </Link>
                  </li>
                  <li className="p-2">
                    <button
                      className="block text-white"
                      onClick={() => {
                        logOut()
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <Link to="/login" className="btn btn-outline btn-warning">
              Login Here
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
