import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
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
                title: "password must have more than 6 characters"
            })

            return;
        }

        if (!/[A-Z]/.test(password)) {
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
                title: "password must have at least one capital character"
            })

            return;
        }

        if (!/[#?!@$%^&*-]/.test(password)) {
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
                title: "password must have at least one special character"
            })

            return;
        }

        createUser(email, password)
            .then(() => {

                updateUserProfile(name)
                    .then(() => {

                    })
                    .catch(error => {
                        console.error(error.message)
                    })

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
                    title: "User Created Successfully"
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
                    title: error.message
                })
            })

    }

    return (
        <div className="flex flex-col min-h-[800px] justify-center items-center px-4">
            <div className="container mx-auto px-4 mb-7">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A] text-center">Register</h1>
            </div>
            <div className="w-full lg:max-w-3xl border p-4 rounded-xl">
                <form onSubmit={handleOnSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#0F172A] text-white hover:text-[#0F172A]">Register</button>
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
                    <span className="text-[#0F172A] font-medium">Already have an account? <Link to="/login"><strong className="">Login</strong></Link></span>
                </div>
            </div>
        </div>
    );
};

export default Register;