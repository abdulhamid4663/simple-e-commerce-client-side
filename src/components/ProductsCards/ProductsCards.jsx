import PropTypes from 'prop-types';
import { BiSolidStar } from "react-icons/bi";

const ProductsCards = ({ product }) => {
    const { name, brand, price, description, rating, image } = product


    return (
        <div className="card card-compact">
            <div className='bg-base-200 py-8 px-4 rounded-xl'>
                <figure className='h-[200px] lg:h-[300px]'><img src={image} alt={`image of ${name}`} className='h-full' /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name.length > 52 ? name.slice(0, 52) + "..." : name}</h2>
                <p className='text-sm font-medium'>{description}</p>
                <p className='text-base text-[#0F172A] font-medium flex-grow'>Brand: <span className='font-normal'>{brand}</span></p>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='border-2 py-1 px-2 border-green-500 rounded-lg text-green-500 font-bold'>${price}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <BiSolidStar className='text-yellow-500 text-xl'/>
                        <p className='text-lg font-semibold text-[#0F172A]'>{rating}</p>
                    </div>
                </div>
                <div className="card-actions justify-between mt-6">
                    <button className="btn bg-[#0F172A] text-white rounded-3xl hover:text-black">Details</button>
                    <button className="btn bg-[#0F172A] text-white rounded-3xl hover:text-black">Update</button>
                </div>
            </div>
        </div>
    );
};

ProductsCards.propTypes = {
    product: PropTypes.object
}

export default ProductsCards;