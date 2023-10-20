import { useLoaderData } from "react-router-dom";
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import Slider from "../../components/SliderComponent/SliderComponent";
import { Helmet } from "react-helmet-async";


const HomeKitchen = () => {
    const loadedProducts = useLoaderData()
    const filterProducts = loadedProducts.filter(product => product?.type === "Home & Kitchen")
    console.log(filterProducts)
    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Home & Kitchen</title>
            </Helmet>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400">Upgrade Your Living Space with Home & Kitchen. <span className="text-[#6B7280]">Explore Our Essentials.</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[80px]">
                {
                    filterProducts.map(product => <ProductsCards key={product._id} product={product} />)
                }
            </div>
            <div>
                <Slider />
            </div>
        </div>
    );
};

export default HomeKitchen;