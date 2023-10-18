import { Link } from "react-router-dom";
import { BiLogoFacebookCircle, BiLogoYoutube } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {
    return (
        <footer className=" border-t-2">
            <div className="container mx-auto px-4">
                <div className="footer p-10 lg:justify-between">
                    <aside>
                        <Link to="/" className=" normal-case text-xl flex items-center gap-4 font-semibold text-[#6B7280]">
                            <div className="w-[30px]">
                                <img src="/logo.png" alt="" />
                            </div>
                            Diyafah
                        </Link>
                        <div className="flex flex-col gap-1 mt-4">
                            <Link className="flex items-center gap-3 text-md">
                                <BiLogoFacebookCircle className="text-2xl"/>
                                Facebook
                            </Link>
                            <Link className="flex items-center gap-3 text-md">
                                <BiLogoYoutube className="text-2xl"/>
                                Youtube
                            </Link>
                            <Link className="flex items-center gap-3 text-md">
                                <BsTelegram className="text-2xl"/>
                                Telegram
                            </Link>
                            <Link className="flex items-center gap-3 text-md">
                                <AiFillTwitterCircle className="text-2xl"/>
                                Twitter
                            </Link>
                        </div>
                    </aside>
                    <nav>
                        <header className="footer-title">Pages</header>
                        <Link to="/" className="link link-hover">Home</Link>
                        <Link to="/" className="link link-hover">Add Product</Link>
                        <Link to="/" className="link link-hover">My Cart</Link>
                        <Link to="/" className="link link-hover">Login</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Categories</header>
                        <a className="link link-hover">Clothing Collection</a>
                        <a className="link link-hover">Shoe Showcase</a>
                        <a className="link link-hover">Eyewear Collection</a>
                        <a className="link link-hover">Home & Kitchen Essentials</a>
                        <a className="link link-hover">Electronics Hub</a>
                        <a className="link link-hover">Gaming accessories</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;