

const MyCart = () => {
    return (
        <div className="container mx-auto px-4 my-[120px]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[80px]">
                <div className="lg:col-span-3">
                    <h1>Left Side</h1>
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
                            <span className="font-bold text-[#0F172A]">$27.00</span>
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