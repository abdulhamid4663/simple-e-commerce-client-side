import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex min-h-[700px] justify-center items-center">
            <form className="card-body max-w-2xl">
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
                <div className="mt-5">
                    <span className="text-[#0F172A] font-medium">Don&apos;t have an account? <Link to="/register"><strong className="">Register</strong></Link></span>
                </div>
            </form>
        </div>
    );
};

export default Login;