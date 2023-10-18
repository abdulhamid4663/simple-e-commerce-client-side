import { BiSolidStar } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { GiCirclingFish } from "react-icons/gi";
import { BsGlobe2 } from "react-icons/bs";
import { RiRefund2Fill } from "react-icons/ri";


const ProductDetails = () => {
    const loadedProduct = useLoaderData()
    const { name, brand, price, description, rating, image } = loadedProduct
    return (
        <div className="container mx-auto px-4 my-[120px] border rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-7">
                <div className="bg-base-200 p-8">
                    <img src={image} alt="" className="mx-auto" />
                </div>
                <div>
                    <h1 className="text-4xl text-[#0F172A] font-medium">{name}</h1>
                    <div className="flex items-center gap-1 py-3">
                        <div className="">
                            <p className="py-1 px-4 border-2 border-green-500 text-base text-green-500 rounded-lg font-bold">${price}</p>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className='flex items-center gap-1'>
                            <BiSolidStar className='text-yellow-500 text-xl' />
                            <p className='text-lg font-semibold text-[#0F172A]'>{rating}</p>
                        </div>
                    </div>
                    <h2 className="text-[#0F172A] font-semibold mt-4">Brand: <span className="font-normal">{brand}</span></h2>

                    <p className="text-[#0F172A] font-semibold mt-4">Description: <span className="font-normal">{description}</span></p>
                    <div className="flex flex-col min-h-[400px]">
                        <div className="flex-grow max-w-sm mt-6">
                            <button className="btn w-full bg-[#0F172A] text-white font-bold">Add to Cart</button>
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                            <div className="bg-green-50 px-4 py-6">
                                <FaShippingFast className="text-2xl" />
                                <h1 className="text-[#0F172A] font-semibold text-base my-1">Free shipping</h1>
                                <p className="text-sm font-normal text-[#64748B]">On orders over $50.00</p>
                            </div>
                            <div className="bg-blue-50 px-4 py-6">
                                <GiCirclingFish className="text-2xl" />
                                <h1 className="text-[#0F172A] font-semibold text-base my-1">Very easy to return</h1>
                                <p className="text-sm font-normal text-[#64748B]">Just phone number.</p>
                            </div>
                            <div className="bg-orange-50 px-4 py-6">
                                <BsGlobe2 className="text-2xl" />
                                <h1 className="text-[#0F172A] font-semibold text-base my-1">Nationwide Delivery</h1>
                                <p className="text-sm font-normal text-[#64748B]">Fast delivery nationwide.</p>
                            </div>
                            <div className="bg-purple-50 px-4 py-6">
                                <RiRefund2Fill className="text-2xl" />
                                <h1 className="text-[#0F172A] font-semibold text-base my-1">Refunds policy</h1>
                                <p className="text-sm font-normal text-[#64748B]">60 days return for any reason</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;