import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const loadedProduct = useLoaderData();
    console.log(loadedProduct);

    const handleDelete = () => {
        
    }


    return (
        <div className="container mx-auto px-4 my-[120px]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[80px]">
                <div className="lg:col-span-3">
                    <div className="grid gap-6">
                        {
                            loadedProduct.map(product =>
                                <div key={product._id} className="grid grid-cols-4 gap-6">
                                    <figure className="bg-base-200 h-[200px] col-span-1 p-4 rounded-xl">
                                        <img src={product.image} alt={`image of ${product.name}`} className="h-full mx-auto" />
                                    </figure>
                                    <div className="col-span-3">
                                        <div className="flex flex-col min-h-[200px] max-h-screen">
                                            <h1 className="text-xl text-[#0F172A] font-medium">{product.name}</h1>
                                            <h2 className="text-[#0F172A] font-medium">Brand: <span className="font-normal">{product.brand}</span></h2>
                                            <div className="flex-grow mt-4">
                                                <span className="py-1 px-2 text-lg font-bold border-2 rounded-xl border-green-500 text-green-500 max-w-fit">${product.price}</span>
                                            </div>
                                            <div className="flex items-center justify-between pr-6">
                                                <p className="text-sm font-semibold text-slate-500">in stock</p>
                                                <button onClick={handleDelete} className="text-blue-400 font-semibold">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div>
                        <h1 className="text-[#0F172A] text-lg font-semibold ">Order Summary</h1>
                        <div className="flex items-center justify-between pt-7 pb-5 border-b">
                            <h2 className="font-medium">Subtotal</h2>
                            <span className="font-medium">$290.33</span>
                        </div>
                        <div className="flex items-center justify-between py-5 border-b">
                            <h2 className="font-medium">Shopping estimate</h2>
                            <span className="font-medium">$5.00</span>
                        </div>
                        <div className="flex items-center justify-between py-5 border-b">
                            <h2 className="font-medium">Tax estimate</h2>
                            <span className="font-medium">$27.00</span>
                        </div>
                        <div className="flex items-center justify-between py-5">
                            <h2 className="font-bold text-[#0F172A]">Order total</h2>
                            <span className="font-bold text-[#0F172A]">$323.33</span>
                        </div>
                        <div className="mt-6">
                            <button className="btn bg-[#0F172A] w-full text-white hover:text-black">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;