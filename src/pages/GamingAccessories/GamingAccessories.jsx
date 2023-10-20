import { useLoaderData } from "react-router-dom";
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import Slider from "../../components/SliderComponent/SliderComponent";
import { Helmet } from "react-helmet-async";


const GamingAccessories = () => {
    const loadedProducts = useLoaderData()
    const filterProducts = loadedProducts.filter(product => product?.type === "Gaming Accessories")

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Gaming Accessories</title>
            </Helmet>
            {
                !filterProducts
                    ?
                    <>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400">Enhance Your Gaming with Our Accessories. <span className="text-[#6B7280]">Explore Gaming Gear.</span></h1>


                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-[80px]">
                            {
                                filterProducts.map(product => <ProductsCards key={product._id} product={product} />)
                            }
                        </div>
                    </>
                    :
                    <div className="flex flex-col items-center justify-center min-h-[500px] my-[120px]">
                        <figure>
                            <img src="https://i.ibb.co/cFy0PBZ/360-F-475012363-a-Nq-Xx8-Crso-Tf-JP5-KCf1r-ERd6-G50-K0h-Xw-removebg-preview1.png" alt="" />
                        </figure>
                        <p className="text-[#6B7280] text-xl max-w-2xl text-center mt-6">Sorry, we couldn&apos;t find the information you&apos;re looking for at the moment. It may not have been added yet or is currently unavailable.</p>
                    </div>
            }
            <div>
                <Slider />
            </div>
        </div>
    );
};

export default GamingAccessories;