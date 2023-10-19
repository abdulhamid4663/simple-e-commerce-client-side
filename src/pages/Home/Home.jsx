import { BiSearch, BiSolidStar } from "react-icons/bi"
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const products = useLoaderData();
    const slicedProduct = products.slice(-8).reverse()

    return (
        <div>
            {/* Banner Section */}
            <div className="bg-gradient-to-b from-orange-100 to-orange-50">
                <div className="bg-cover bg-center" style={{ backgroundImage: "url(/shapes.svg)" }}>
                    <div className="container mx-auto px-4">
                        <div className="hero min-h-[700px]">
                            <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse min-h-[700px]">
                                <img src="https://i.ibb.co/nLVD4Ph/girl.png" className="lg:h-[700px]" />
                                <div className="py-12 lg:py-0">
                                    <h1 className="text-xl font-semibold text-[#334155]">Just In! 🛍️</h1>
                                    <p className="py-6 text-2xl md:text-3xl lg:text-5xl font-bold text-[#0F172A] leading-snug">Discover our newest arrivals. Shop now!</p>
                                    <a href="#newArrival" className="btn lg:btn-md bg-[#0F172A] text-white hover:text-[#0F172A] rounded-2xl">
                                        Browse
                                        <div className="text-xl">
                                            <BiSearch />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Section */}
            <div className="container mx-auto px-4 my-[120px]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]">Shop by Category. <span className="text-[#6B7280]">Find Your Style, Explore Our Diverse Range of Products.</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
                    <div className="bg-sky-50 rounded-xl p-7 lg:pr-0">
                        <div className="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Clothing Collection
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Elevate Your Style with Our Collection.</h4>
                                <Link to="clothingCollection" className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/6v304kx/New-Mockups-no-hanger-TShirt-Yellow-transformed.png" alt="t-shirt" className="lg:w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="bg-lime-50 rounded-xl p-7 lg:pr-0">
                        <div className="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Shoe Showcase
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Step into Style with Our Selection.</h4>
                                <Link to="/shoeShowcase" className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/RCqnC0k/istockphoto-1350560575-170667a-transformed.png" alt="Shoes" className="lg:w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-7 lg:pr-0">
                        <div className="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs flex-1 min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Eyewear Collection
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">See Clearly, Look Stylish with Us</h4>
                                <Link to="/eyewearCollection" className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <div className="flex-1">
                                <img src="https://i.ibb.co/dgHDFz2/r-BVap2-FUJdy-AWLDl-AABy-Q-cy6c-I780-transformed.png" alt="Eyewear" />
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
                                <Link to="/homeKitchen" className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/8NZJ7KR/frying-pan-kitchenware-cookware-and-bakeware-kitchen-utensil-kitchen-transformed.png" alt="Home & Kitchen" className="lg:w-[280px] lg:h-[250px]" />
                        </div>
                    </div>
                    <div className="bg-pink-50 rounded-xl">
                        <div className="flex flex-col-reverse items-center lg:flex-row p-7 lg:pr-0 w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Electronics Hub
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Tech Up Your Life with Us.</h4>
                                <Link to="/electronics" className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/VCDx7GL/laptop-computer-electronics-multimedia-gadget-national-day-element-transformed.png" alt="Electronics" className="lg:w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                    <div className="bg-green-50 rounded-xl">
                        <div className="flex flex-col-reverse items-center lg:flex-row p-7 lg:pr-0 w-full lg:justify-between gap-6 lg:gap-0 min-h-[250px]">
                            <div className="flex flex-col w-full lg:max-w-xs min-h-[250px]">
                                <span className="text-base font-semibold text-[#6B7280]">
                                    Gaming accessories
                                </span>
                                <h4 className="text-2xl font-semibold text-[#0F172A] flex-grow lg:mt-6">Level Up Your Gaming Experience Here.</h4>
                                <Link to="/gamingAccessories" className="max-w-fit">
                                    <button className="btn bg-white text-[#0F172A] normal-case">Show me all</button>
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/tBsn2QH/png-clipart-xbox-one-controller-game-controllers-video-game-console-accessories-video-game-consoles.png" alt="Gaming accessories " className="w-[200px] md:h-[200px]" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest Arrive Section */}
            <div className="container mx-auto px-4 mb-[120px]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]">New Arrivals. <span className="text-[#6B7280]">Discover Our Latest Arrivals</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12" id="newArrival">
                    {
                        slicedProduct.map(product =>
                            <div key={product._id}>
                                <div className="card border p-6">
                                    <div className="bg-[#F8FAFC] p-6 rounded-2xl">
                                        <figure className="h-[250px]">
                                            <img src={product.image} className="h-full" />
                                        </figure>
                                    </div>

                                    <div className="card-body pb-0 px-0 h-[300px] lg:h-[350px] xl:h-[350px]">
                                        <h2 className="card-title text-lg">{product.name.length > 50 ? product.name.slice(0, 50) + " ..." : product.name}</h2>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className='border-2 py-1 px-2 border-green-500 rounded-lg text-green-500 font-bold'>${product.price}</p>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <BiSolidStar className='text-yellow-500 text-xl' />
                                                <p className='text-lg font-semibold text-[#0F172A]'>{product.rating}</p>
                                            </div>
                                        </div>
                                        <h4 className=" text-[#6B7280] font-semibold">Brand: <span className="font-medium text-[#0F172A]">{product.brand}</span></h4>
                                        <p className="text-[#6B7280] text-base font-medium flex-grow">{product.description.length > 80 ? product.description.slice(0, 80) + " ..." : product.description}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/productDetails/${product._id}`}>
                                                <button className="btn bg-[#0F172A] text-white hover:text-[#0F172A]">Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;