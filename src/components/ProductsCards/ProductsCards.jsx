import PropTypes from 'prop-types';
import { BiSolidStar } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ProductsCards = ({ product }) => {
    const { _id, name, brand, price, description, rating, image } = product

    return (
        <div className="card card-compact">
            <div className='bg-[#F8FAFC] py-8 px-4 rounded-xl'>
                <figure className='h-[200px] lg:h-[300px]'><img src={image} alt={`image of ${name}`} className='h-full' /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name.length > 50 ? name.slice(0, 50) + " ..." : name}</h2>
                <p className='text-sm font-medium'>{description.length > 100 ? description.slice(0, 100) + " ..." : description}</p>
                <p className='text-base font-medium flex-grow'>Brand: <span className='font-normal text-[#6B7280]'>{brand}</span></p>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='border-2 py-1 px-2 border-green-500 rounded-lg text-green-500 font-bold'>${price}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <BiSolidStar className='text-yellow-500 text-xl' />
                        <p className='text-lg font-semibold text-[#6B7280]'>{rating}</p>
                    </div>
                </div>
                <div className="card-actions justify-between mt-6">
                    <Link to={`/productDetails/${_id}`}>
                        <button className="btn bg-[#0F172A] text-white rounded-3xl hover:text-black">Details</button>
                    </Link>
                    <Link to={`/updateProduct/${_id}`}>
                        <button className="btn bg-[#0F172A] text-white rounded-3xl hover:text-black">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ProductsCards.propTypes = {
    product: PropTypes.object
}

export default ProductsCards;