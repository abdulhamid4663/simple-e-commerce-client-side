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
            <NavLink to="/login">Login</NavLink>
        </li>
    </>


    return (
        <div className="bg-base-100">
            <div className="container mx-auto px-4">
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
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost">
                                <div className="indicator">
                                    <span className="font-normal text-sm normal-case">My Cart</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <div className="card-actions">
                                        <Link className="w-full">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn normal-case">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;