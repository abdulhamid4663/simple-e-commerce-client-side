import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const navLinks = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/addProduct">Add Product</NavLink>
        </li>
        <li>
            <NavLink to="/myCart">My Cart</NavLink>
        </li>
    </>


    return (
        <div className="bg-base-100">
            <div className="container mx-auto px-2 lg:px-4">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/" className=" normal-case text-xl flex items-center gap-4 font-semibold text-[#6B7280]">
                            <div className="w-[30px]">
                                <img src="/logo.png" alt="" />
                            </div>
                            Diyafah</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        
                        <a className="btn normal-case">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;