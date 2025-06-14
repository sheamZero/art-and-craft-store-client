import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    let users = false;

    return (
        <nav className="bg-background py-4 shadow-sm">
            <div className="navbar">
                {/* left side */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-lg font-quicksand menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/all-items"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                                >
                                    All Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/add-items"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                                >
                                    Add Art & Craft
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/my-items"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                                >
                                    My Art & Craft
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold' : 'hover:text-buttonBg transition'}
                                >
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-lg font-quicksand ">
                        <p>Craft<span className="text-buttonHoverBg"><b>!</b></span>qo</p>
                    </Link>
                </div>

                {/* Middle */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1 font-quicksand">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/all-items"
                                className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                            >
                                All Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/add-items"
                                className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                            >
                                Add Art & Craft
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/my-items"
                                className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                            >
                                My Art & Craft
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* right side */}
                <div className="navbar-end">
                    {!users ? (
                        <ul className="menu menu-horizontal text-lg px-1 font-quicksand">
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold border-b-2 border-heading' : 'hover:text-buttonBg transition'}
                                >
                                    Signin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) => isActive ? 'text-heading font-semibold' : 'hover:text-buttonBg transition'}
                                >
                                    Signup
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center">
                            👤
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
