import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";

const SliderComponent = () => {
  const [products, setProducts] = useState([])

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        }
      },
    ]
  };

  useEffect(() => {
    fetch("https://diyafah-server.vercel.app/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <div className="my-[120px] pt-[80px] border-t">
        <Slider {...settings}>
          {
            products.map(product => <div key={product._id}>
              <div className="border rounded-xl p-4 mx-3">
                <div className="h-[250px] p-6 bg-[#F8FAFC] rounded-xl">
                  <img src={product.image} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="h-[185px] flex flex-col">
                  <h1 className="text-lg font-medium pt-4">{product.name.length > 38 ? product.name.slice(0, 38) + " ..." : product.name}</h1>
                  <div className='flex items-center justify-between mt-4'>
                    <div>
                      <p className='border-2 py-1 px-2 border-green-500 rounded-lg text-green-500 font-bold'>${product.price}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <BiSolidStar className='text-yellow-500 text-xl' />
                      <p className='text-lg font-semibold text-[#6B7280]'>{product.rating}</p>
                    </div>
                  </div>
                  <div>
                    <Link to={`/productDetails/${product._id}`}>
                      <button className="btn bg-[#0F172A] text-white rounded-xl w-full mt-4 hover:text-black">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;