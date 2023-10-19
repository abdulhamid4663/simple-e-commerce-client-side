import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const loadedProduct = useLoaderData();
    const [value, setValue] = useState(loadedProduct.type);
    console.log(loadedProduct);

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

        const updatedProduct = { name, brand, price, description, rating, type, image };

        fetch(`https://diyafah-server.vercel.app/products/${loadedProduct._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })


    }

    const handleOnChange = e => {
        setValue(e.target.value);
    }

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Update Product</title>
            </Helmet>
            <div>
                <h1 className="text-[#0F172A] text-4xl">Update Product</h1>
            </div>
            <div>
                <form onSubmit={handleOnSubmit} className="card-body">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={loadedProduct.name} placeholder="name of product here..." className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" name="brand" defaultValue={loadedProduct.brand} placeholder="name of brand here..." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={loadedProduct.price} placeholder="price of product here..." className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input type="text" name="description" defaultValue={loadedProduct.description} placeholder="short description here..." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end gap-6">
                        <div className="form-control lg:flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={loadedProduct.rating} placeholder="give rating 0 to 5" className="input input-bordered" required />
                        </div>
                        <div className="lg:flex-1">
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="lg:flex-1">
                                    <select onChange={handleOnChange} defaultValue={loadedProduct.type} name="type" className="select select-ghost w-full">
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
                            <input type="text" name="image" defaultValue={loadedProduct.image} placeholder="give an image url here..." className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#0F172A] text-white text-bold normal-case">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;