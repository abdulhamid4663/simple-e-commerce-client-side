import { useLoaderData } from "react-router-dom";
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import { Helmet } from "react-helmet-async";
import SliderComponent from "../../components/SliderComponent/SliderComponent";


const EyewearCollection = () => {
    const loadedProducts = useLoaderData()
    const filterProducts = loadedProducts.filter(product => product?.type === "Glasses")

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Eyewear Collection</title>
            </Helmet>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400">See Clearly with Glasses. <span className="text-[#6B7280]">Explore Our Eyewear Options</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[80px]">
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            filterProducts.map(product => <ProductsCards key={product._id} product={product} />)
                        }
                    </div>
                </div>
                <div className="">
                    <h1 className="text-xl font-semibold mb-2">Ads.</h1>
                    <div className="mb-6 ">
                        <img src="https://i.ibb.co/YBbTdPb/shoes-craze-sale-facebook-ad-design-template-b1d1738fd5e9e0f6e3152ec502a1c2e1-screen.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="mb-6  ">
                        <img src="https://i.ibb.co/RQKCdtk/f0f9e45724771f16745ad3f6f640d3ce.jpg" alt="" className=" w-full h-full" />
                    </div>
                    <div className="mb-6 ">
                        <img src="https://i.ibb.co/ggV4QpT/a2f826c5-fd50-4713-a7f9-022780952b8f.jpg" alt="" className=" w-full h-full" />
                    </div>
                </div>
            </div>
            <div>
                <SliderComponent />
            </div>
        </div>
    );
};

export default EyewearCollection;