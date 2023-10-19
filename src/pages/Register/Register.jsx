import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div className="flex min-h-[800px] justify-center items-center">
            <div className="w-1/3 border p-4 rounded-xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#0F172A] text-white hover:text-[#0F172A]">Register</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="">
                    <button className="btn text-blue-600 normal-case">
                        <FcGoogle className="text-xl"/>
                        Login with Google
                    </button>
                </div>
                <div className="mt-6">
                    <span className="text-[#0F172A] font-medium">Already have an account? <Link to="/login"><strong className="">Login</strong></Link></span>
                </div>
            </div>
        </div>
    );
};

export default Register;