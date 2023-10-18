import { useState } from "react";


const AddProduct = () => {
    const [selected, setSelected] = useState('')


    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const type = selected;
        const image = form.image.value;

        const newProduct = { name, brand, price, description, rating, type, image };

        console.log(newProduct)
    }

    const handleOnChange = e => {
        setSelected(e.target.value)
    }

    return (
        <div className="container mx-auto px-4 my-28">
            <div>
                <h1 className="text-[#0F172A] text-4xl">Add Product</h1>
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
                                    <select onChange={handleOnChange} name="type" className="select select-ghost w-full">
                                        <option disabled selected>Select the Type</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Glasses">Glasses</option>
                                        <option value="Home & Kitchen">Home & Kitchen</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Gaming accessories">Gaming accessories</option>
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