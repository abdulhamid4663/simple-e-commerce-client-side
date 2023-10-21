import { Helmet } from "react-helmet-async";
import SliderComponent from "../../components/SliderComponent/SliderComponent";


const GamingAccessories = () => {
    return (
        <div className="container mx-auto px-4 my-[120px]">
            <Helmet>
                <title>Diyafah || Gaming Accessories</title>
            </Helmet>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400">Enhance Your Gaming with Our Accessories. <span className="text-[#6B7280]">Explore Gaming Gear.</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[80px]">
                <div className="lg:col-span-3">
                    <div className="flex flex-col items-center justify-center min-h-[500px] my-[120px]">
                        <figure>
                            <img src="https://i.ibb.co/cFy0PBZ/360-F-475012363-a-Nq-Xx8-Crso-Tf-JP5-KCf1r-ERd6-G50-K0h-Xw-removebg-preview1.png" alt="" />
                        </figure>
                        <p className="text-[#6B7280] text-xl max-w-2xl text-center mt-6">Sorry, we couldn&apos;t find the information you&apos;re looking for at the moment. It may not have been added yet or is currently unavailable.</p>
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

export default GamingAccessories;