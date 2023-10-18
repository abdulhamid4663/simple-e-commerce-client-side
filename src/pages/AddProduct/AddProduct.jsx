

const AddProduct = () => {

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const type = form.type.selected;
        const gender = form.gender.selected;
        const image = form.image.value;

        console.log(name, brand, price, description, rating, type, gender, image)
    }

    return (
        <div className="container mx-auto px-4 mt-16">
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
                                    <select name="type" className="select select-ghost w-full">
                                        <option disabled selected>Select the Type</option>
                                        <option>Clothing</option>
                                        <option>Shoes</option>
                                        <option>Watch</option>
                                    </select>
                                </div>
                                <div className="lg:flex-1">
                                    <select name="gender" className="select select-ghost w-full">
                                        <option disabled selected>Select Gender</option>
                                        <option>Men</option>
                                        <option>Women</option>
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