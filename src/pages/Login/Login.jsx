import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex flex-col min-h-[700px] justify-center items-center">
            <div className="container mx-auto px-4 mb-7">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A] text-center">Login</h1>
            </div>
            <div className="w-full lg:max-w-3xl border p-4 rounded-xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
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
                    <button className="btn text-blue-600 normal-case">
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