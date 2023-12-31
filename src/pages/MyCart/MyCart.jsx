import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const loadedProduct = useLoaderData();
    const [cartProduct, setCartProduct] = useState(loadedProduct)

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`https://diyafah-server.vercel.app/cart/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                const remainingCartProduct = cartProduct.filter(product => product._id !== id)
                setCartProduct(remainingCartProduct)
            }
        })
    }


    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || My Cart</title>
            </Helmet>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-[80px]">
                <div className="lg:col-span-4 xl:col-span-4">
                    <div className="grid gap-6">
                        {
                            cartProduct.map(product =>
                                <div key={product._id} className="bg-[#F8FAFC] p-4 rounded-xl">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                        <figure className="bg-base-200 h-[200px] md:col-span-2 lg:col-span-2 p-4 rounded-xl">
                                            <img src={product.image} alt={`image of ${product.name}`} className="h-full mx-auto" />
                                        </figure>
                                        <div className="md:col-span-3 lg:col-span-3">
                                            <div className="flex flex-col min-h-[200px] max-h-screen">
                                                <h1 className="text-xl text-[#0F172A] font-medium">{product.name}</h1>
                                                <h2 className="text-[#0F172A] font-medium mt-2">Brand: <span className="font-normal">{product.brand}</span></h2>
                                                <div className="flex-grow mt-4">
                                                    <span className="py-1 px-2 text-lg font-bold border-2 rounded-xl border-green-500 text-green-500 max-w-fit">${product.price}</span>
                                                </div>
                                                <div className="flex items-center justify-between pr-6">
                                                    <p className="text-sm font-semibold text-slate-500">in stock</p>
                                                    <button onClick={() => handleDelete(product._id)} className="text-blue-400 font-semibold">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="lg:col-span-2 xl:col-span-2">
                    <div className="bg-[#F8FAFC] p-4 rounded-xl sticky top-32">
                        <h1 className="text-[#0F172A] text-lg font-semibold ">Order Summary</h1>
                        <div className="flex items-center justify-between pt-7 pb-5 border-b">
                            <h2 className="font-medium text-[#0F172A]">Subtotal</h2>
                            <span className="font-medium text-[#0F172A]">$290.33</span>
                        </div>
                        <div className="flex items-center justify-between py-5 border-b">
                            <h2 className="font-medium text-[#0F172A]">Shopping estimate</h2>
                            <span className="font-medium text-[#0F172A]">$5.00</span>
                        </div>
                        <div className="flex items-center justify-between py-5 border-b">
                            <h2 className="font-medium text-[#0F172A]">Tax estimate</h2>
                            <span className="font-medium text-[#0F172A]">$27.00</span>
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