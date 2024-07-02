import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { name: "Buy Gold", to: "/" },
        { name: "Sell Gold", to: "/" }
    ];

    return (
        <div className="">
            <div className="navbar bg-gray-900 mt-0 lg:mt-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems.map((item, index) => (
                                <li key={index} className="brand-color">
                                    <Link to={item.to} className="nav-link">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map((item, index) => (
                            <li key={index} className="brand-color font-semibold text-lg">
                                <Link to={item.to} className="nav-link m-2">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
