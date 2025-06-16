import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logoutUser()
            .then(() => console.log("logout successfully"))
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: `${err.message}`,
                    icon: 'error'
                });
            });
    };

    const linkStyle = ({ isActive }) =>
        isActive
            ? 'text-teal-600 font-semibold border-b-2 border-teal-600'
            : 'hover:text-teal-500 transition';

    return (
        <nav className="bg-teal-50 py-4 shadow-sm">
            <div className="navbar">
                {/* left side */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-lg font-quicksand menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                            <li><NavLink to="/all-items" className={linkStyle}>All Items</NavLink></li>
                            <li><NavLink to="/add-items" className={linkStyle}>Add Art & Craft</NavLink></li>
                            <li><NavLink to="/my-items" className={linkStyle}>My Art & Craft</NavLink></li>
                            <li><NavLink to="/login" className={linkStyle}>Login</NavLink></li>
                            <li><NavLink to="/register" className={({ isActive }) => isActive ? 'text-teal-600 font-semibold' : 'hover:text-teal-500 transition'}>Register</NavLink></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-lg font-quicksand">
                        <p>Craft<span className="text-teal-600"><b>!</b></span>qo</p>
                    </Link>
                </div>

                {/* Middle */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1 font-quicksand">
                        <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                        <li><NavLink to="/all-items" className={linkStyle}>All Items</NavLink></li>
                        <li><NavLink to="/add-items" className={linkStyle}>Add Art & Craft</NavLink></li>
                        <li><NavLink to="/my-items" className={linkStyle}>My Art & Craft</NavLink></li>
                    </ul>
                </div>

                {/* right side */}
                <div className="navbar-end">
                    {!user ? (
                        <ul className="menu menu-horizontal text-lg px-1 font-quicksand">
                            <li><NavLink to="/login" className={linkStyle}>Signin</NavLink></li>
                            <li><NavLink to="/register" className={({ isActive }) => isActive ? 'text-teal-600 font-semibold' : 'hover:text-teal-500 transition'}>Signup</NavLink></li>
                        </ul>
                    ) : (
                        <div className="w-10 h-10 flex items-center gap-2 cursor-pointer group relative rounded-full bg-teal-500 text-white justify-center">
                            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user" />
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 hidden group-hover:block">
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content text-base font-medium bg-white rounded-box z-[1] mt-3 w-52 p-4 shadow">
                                    <li><span>UserName : {user.displayName}</span></li>
                                    <li><button onClick={handleLogOut} className="hover:text-teal-500">Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
