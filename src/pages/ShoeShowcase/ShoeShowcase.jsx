import { useLoaderData } from "react-router-dom";
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import Slider from "../../components/Slider/Slider";


const ShoeShowcase = () => {
    const loadedProducts = useLoaderData()
    const filterProducts = loadedProducts.filter(product => product?.type === "Shoes")
    
    return (
        <div className="container mx-auto px-4 my-[120px]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]">Step into Style with Shoes. <span className="text-[#6B7280]">Explore Our Footwear Collection</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 mt-[80px]">
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            filterProducts.map(product => <ProductsCards key={product._id} product={product} />)
                        }
                    </div>
                </div>
                <div className="lg:col-span-1 lg:border-l-2 px-4">
                    <Slider />
                </div>
            </div>


        </div>
    );
};

export default ShoeShowcase;