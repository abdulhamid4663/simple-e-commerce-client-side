import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="bg-gradient-to-b from-green-100 to-green-50">
                <div className="bg-cover bg-center" style={{ backgroundImage: "url(/shapes.svg)" }}>
                    <div className="container mx-auto px-4">
                        <div className="hero min-h-[700px]">
                            <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse min-h-[700px]">
                                <img src="/girl.png" className="lg:h-[700px]" />
                                <div className="py-12 lg:py-0">
                                    <h1 className="text-xl font-semibold text-[#334155]">Just In! 🛍️</h1>
                                    <p className="py-6 text-2xl md:text-3xl lg:text-5xl font-bold text-[#0F172A] leading-snug">Discover our newest arrivals. Shop now!</p>
                                    <button className="btn lg:btn-lg bg-[#0F172A] text-white hover:text-[#0F172A] rounded-2xl">
                                        Browse
                                        <div className="text-2xl">
                                            <BiSearch />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            {/* Steal the Deals Massive Discounts Await You! */}
                            {/* 🔥 Limited Time Offer <br />Get Up to <span className="text-[#FF6650]">50%</span> Off on Your Favorite Styles! Shop Now and Save Big! */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Section */}
            <div className="container mx-auto px-4 my-[120px]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]">Shop by Category. <span className="text-[#6B7280]">Find your style, explore our categories</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
                    <div className="bg-sky-50 rounded-xl p-7 lg:pr-0">
                        <div className="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Clothing Collection
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Elevate Your Style with Our Collection.</h4>
                                <Link className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="t-shirt" className="w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="bg-lime-50 rounded-xl p-7 lg:pr-0">
                        <div className="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Shoe Showcase
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Step into Style with Our Selection.</h4>
                                <Link className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/RCqnC0k/istockphoto-1350560575-170667a-transformed.png" alt="Shoes" className="w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-7 lg:pr-0">
                        <div className="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs flex-1 min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Eyewear Collection
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">See Clearly, Look Stylish with Us</h4>
                                <Link className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <div className="flex-1">
                                <img src="https://i.ibb.co/dgHDFz2/r-BVap2-FUJdy-AWLDl-AABy-Q-cy6c-I780-transformed.png" alt="Burger" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-orange-50 rounded-xl">
                        <div className="flex flex-col-reverse items-center lg:flex-row p-7 lg:pr-0 w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Home & Kitchen Essentials
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Upgrade Your Space with Our Selection.</h4>
                                <Link className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/8NZJ7KR/frying-pan-kitchenware-cookware-and-bakeware-kitchen-utensil-kitchen-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="bg-pink-50 rounded-xl">
                        <div className="flex flex-col-reverse items-center lg:flex-row p-7 lg:pr-0 w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Electronics Hub
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Tech Up Your Life with Us.</h4>
                                <Link className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/VCDx7GL/laptop-computer-electronics-multimedia-gadget-national-day-element-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="bg-green-50 rounded-xl">
                        <div className="flex flex-col-reverse items-center lg:flex-row p-7 lg:pr-0 w-full lg:justify-between gap-6 lg:gap-0 lg:min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs lg:min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Gaming accessories
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Level Up Your Gaming Experience Here.</h4>
                                <Link className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/tBsn2QH/png-clipart-xbox-one-controller-game-controllers-video-game-console-accessories-video-game-consoles.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                </div>
                {/* <div className="carousel rounded-box mt-12 flex-wrap gap-6">
                    <div className="carousel-item bg-red-50 rounded-xl">
                        <div className="flex p-7 w-full justify-between ">
                            <div className="flex flex-col max-w-xs">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Discover Our Clothing Collection
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow mt-10">Elevate Your Style with Our Collection.</h4>
                                <Link className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="carousel-item  bg-red-50 rounded-xl">
                        <div className="carousel-item bg-red-50 rounded-xl">
                            <div className="flex flex-col lg:flex-row p-7 w-full justify-between ">
                                <div className="flex flex-col max-w-xs">
                                    <span className="text-base font-semibold text-[#6B7280]">
                                        Discover Our Clothing Collection
                                    </span>
                                    <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow mt-10">Elevate Your Style with Our Collection.</h4>
                                    <Link className="max-w-fit">
                                        <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                    </Link>
                                </div>
                                <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  bg-red-50 rounded-xl">
                        <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                    </div>
                    <div className="carousel-item bg-red-50 rounded-xl">
                        <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                    </div>
                    <div className="carousel-item bg-red-50 rounded-xl">
                        <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                    </div>
                    <div className="carousel-item bg-red-50 rounded-xl">
                        <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                    </div>
                    <div className="carousel-item bg-red-50 rounded-xl">
                        <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="Burger" className="w-[200px] md:h-[200px]" />
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default Home;