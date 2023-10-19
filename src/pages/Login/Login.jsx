import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const Login = () => {
    const { loginUser, loginWIthGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
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
                    title: "User Logged in Successfully"
                })

                navigate(location?.state ? location.state : "/")
            })
            .catch(() => {
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
                    icon: 'error',
                    title: "Email or Password is Invalid"
                })
            })

    }

    const handleGoogleLoginIn = () => {
        loginWIthGoogle()
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
                    title: "User logged in with google successfully",
                })

                navigate("/")
            })
            .catch(error => {
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
                    icon: 'error',
                    title: error.message,
                })
            })
    }

    return (
        <div className="flex flex-col min-h-[700px] justify-center items-center">
            <div className="container mx-auto px-4 mb-7">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A] text-center">Login</h1>
            </div>
            <div className="w-full lg:max-w-3xl border p-4 rounded-xl">
                <form onSubmit={handleOnSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#0F172A] text-white hover:text-[#0F172A]">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="">
                    <button onClick={handleGoogleLoginIn} className="btn text-blue-600 normal-case">
                        <FcGoogle className="text-xl" />
                        Login with Google
                    </button>
                </div>
                <div className="mt-7 text-center">
                    <span className="text-[#0F172A] font-medium">Don&apos;t have an account? <Link to="/register"><strong className="">Register</strong></Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;