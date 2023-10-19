import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Header = () => {
    const { user, userLogout, loading } = useContext(AuthContext);

    const navLinks = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/addProduct">Add Product</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact us</NavLink>
        </li>
        <li>
            <NavLink to="/myCart">My Cart</NavLink>
        </li>
    </>

    const navCategories = <>
        <li>
            <NavLink to='/clothingCollection'>Clothing Collection</NavLink>
        </li>
        <li>
            <NavLink to='/shoeShowcase'>Shoe Collection</NavLink>
        </li>
        <li>
            <NavLink to='/eyewearCollection'>Eyewear Collection</NavLink>
        </li>
        <li>
            <NavLink to='/homeKitchen'>Home & Kitchen</NavLink>
        </li>
        <li>
            <NavLink to='/electronics'>Electronics Hub</NavLink>
        </li>
        <li>
            <NavLink to='/gamingAccessories'>Gaming Accessories</NavLink>
        </li>
    </>

    const handleLogout = () => {
        userLogout()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: "User Logged out Successfully"
                })
            })
            .catch(error => {
                console.error(error.message)
            })
    }

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
                                <li>
                                    <a>Categories</a>
                                    <ul className="p-2">
                                        {navCategories}
                                    </ul>
                                </li>
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
                            <li tabIndex={0} className="z-10">
                                <details>
                                    <summary>Categories</summary>
                                    <ul className="p-2">
                                        {navCategories}
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            loading ? ""
                                :
                                <>
                                    {
                                        user ?
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        {
                                                            user.photoURL
                                                                ?
                                                                <img src={user.photoURL} />
                                                                :
                                                                <img src="https://i.ibb.co/tMy0bd5/pngwing-com.png" />

                                                        }
                                                    </div>
                                                </label>
                                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                                    <div className="text-center py-3">
                                                        <p className="text-[#6B7280]">User:</p>
                                                        <strong className="text-base text-[#334155]">{user.displayName}</strong>
                                                    </div>
                                                    <li>
                                                        <a className="justify-between">
                                                            Profile
                                                            <span className="badge">New</span>
                                                        </a>
                                                    </li>
                                                    <li><a>Settings</a></li>
                                                    <li onClick={handleLogout}><a>Logout</a></li>
                                                </ul>
                                            </div>
                                            :
                                            <Link to="/login" className="btn normal-case">Login</Link>
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;