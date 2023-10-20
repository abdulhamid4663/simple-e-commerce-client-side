
import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div>
                    <img src="/404.gif" />
                </div>
                <div className="text-center px-4">
                    <h2 className="font-semibold text-[#68C0CE] mb-4 text-base lg:text-xl lg:mb-2">We&apos;re sorry, but the page you are trying to access does not exist.</h2>
                    <h1 className="font-semibold text-[#68C0CE] text-base lg:text-xl mb-6">We kindly ask you to return to the homepage</h1>
                    <Link to="/">
                        <button className="btn btn-error border-none hover:bg-slate-300 hover:text-black">Homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;