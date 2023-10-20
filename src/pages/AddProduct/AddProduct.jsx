import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AddProduct = () => {
    const [value, setValue] = useState('')

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const type = value;
        const image = form.image.value;

        const newProduct = { name, brand, price, description, rating, type, image };

        fetch("https://diyafah-server.vercel.app/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

                form.reset()
            })
    }

    const handleOnChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Add Product</title>
            </Helmet>
            <div>
                <h1 className={`text-orange-400 text-4xl`}>Add Product</h1>
            </div>
            <div>
                <form onSubmit={handleOnSubmit} className="card-body">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name of product here..." className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" name="brand" placeholder="name of brand here..." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="price of product here..." className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input type="text" name="description" placeholder="short description here..." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end gap-6">
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="give rating 0 to 5" className="input input-bordered" required />
                        </div>
                        <div className="lg:flex-1">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="lg:flex-1">
                                    <select onChange={handleOnChange} defaultValue="Select the Type" name="type" className="select select-ghost w-full">
                                        <option disabled>Select the Type</option>
                                        <option defaultValue="Clothing">Clothing</option>
                                        <option defaultValue="Shoes">Shoes</option>
                                        <option defaultValue="Glasses">Glasses</option>
                                        <option defaultValue="Home & Kitchen">Home & Kitchen</option>
                                        <option defaultValue="Electronics">Electronics</option>
                                        <option defaultValue="Gaming accessories">Gaming accessories</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="give an image url here..." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#0F172A] text-white text-bold normal-case">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;