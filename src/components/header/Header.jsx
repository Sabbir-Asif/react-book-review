import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-green-primary btn bg-inherit border-green-primary shadow-none hover:bg-green-primary hover:text-white font-semibold text-lg"
                    : isPending
                        ? "pending"
                        : ""
            }>
        Home
        </NavLink></li>
        <li><NavLink to='/listed-books'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-green-primary btn bg-inherit border-green-primary shadow-none hover:bg-green-primary hover:text-white font-semibold text-lg"
                    : isPending
                        ? "pending"
                        : ""
            }>
        Listed Books
        </NavLink></li>
        <li><NavLink to='/pages-to-read'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-green-primary btn bg-inherit border-green-primary shadow-none hover:bg-green-primary hover:text-white font-semibold text-lg"
                    : isPending
                        ? "pending"
                        : ""
            }>
        Pages to Read
        </NavLink></li>
    </>
    return (
        <div className="navbar font-work-sans bg-base-100">
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
                        className="menu menu-sm dropdown-content text-gray-600 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow items-center text-lg">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg md:text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-gray-600 items-center text-lg px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-1 md:gap-3">
                <a className="btn text-white text-sm md:text-lg font-semibold bg-green-primary">Sign in</a>
                <a className="btn text-white text-sm hidden md:flex md:text-lg font-semibold bg-blue-primary">Sign up</a>
            </div>
        </div>
    );
};

export default Header;