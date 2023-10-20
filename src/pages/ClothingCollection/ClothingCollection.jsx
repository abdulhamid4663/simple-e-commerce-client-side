import { useLoaderData } from "react-router-dom";
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import { Helmet } from "react-helmet-async";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

const ClothingCollection = () => {
    const loadedProducts = useLoaderData()
    const filterProducts = loadedProducts.filter(product => product?.type === "Clothing")
    console.log(filterProducts)
    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Clothing Collection</title>
            </Helmet>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400">Discover Your Style in Clothing. <span className="text-[#6B7280]">Explore Our Fashion Selection</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    filterProducts.map(product => <ProductsCards key={product._id} product={product} />)
                }
            </div>
            <div>
                <SliderComponent />
            </div>
        </div>
    );
};

export default ClothingCollection;