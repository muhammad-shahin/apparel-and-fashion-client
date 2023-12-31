import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineEdit } from 'react-icons/ai';
import { RiPagesLine } from 'react-icons/ri';
import GlassButton from '../GlassButton/GlassButton';
import StarRating from '../StarRating/StarRating';

const Card = ({
  product,
  handleProductDetailsClick,
  handleProductUpdateClick,
}) => {
  const {
    productName,
    productImages,
    productColors,
    productSize,
    productPrice,
    brandName,
    productType,
    _id,
  } = product;
  const image1 = productImages?.[0];
  const image2 = productImages?.[1];
  // adding 30% discount on main price
  const offerPrice = productPrice - (productPrice * 30) / 100;
  const [visibleButtons, setVisibleButtons] = useState(false);
  return (
    <div
      className='w-[18.75rem] overflow-hidden relative border-[4px] border-blue-200 border-opacity-[1.50] rounded-lg dark:text-white'
      onMouseEnter={() => {
        setVisibleButtons(true);
      }}
      onMouseLeave={() => {
        setVisibleButtons(false);
      }}
    >
      {/* image */}
      <div className='overflow-hidden relative'>
        <img
          className={`card-image w-full h-[19rem] object-cover ${
            visibleButtons ? 'zoom-in' : 'zoom-out'
          } `}
          src={visibleButtons ? `${image2}` : `${image1}`}
          alt='Product Image'
          loading='lazy'
        />
        {/* on mouse enter show add to cart buttons */}
        <div
          className={`absolute top-[30%] left-0 w-full h-full opacity-0 flex justify-center items-center flex-col gap-4 px-[5%] ${
            visibleButtons
              ? 'appearStyle appeared'
              : 'disappearStyle disappeared'
          } `}
        >
          <GlassButton text='Buy Now' />
          <div className='flex gap-4 justify-center items-center'>
            {productSize?.map((size, index) => (
              <p
                key={index}
                className='text-[14px] font-medium text-white bg-gray-500 bg-opacity-[0.49] backdrop-blur-[25px] rounded-full p-2 w-[48px] h-[48px] flex justify-center items-center'
              >
                {size.slice(0, 3)}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* text content */}
      <div className='px-4 py-3 space-y-2 flex-grow'>
        {/* product name */}
        <p
          className='md:text-[20px] text-[18px] min-h-[60px] font-medium uppercase'
          style={{ fontFamily: 'Quicksand' }}
        >
          {productName}
        </p>
        {/* product price */}
        <div
          className='text-[16px] flex justify-center items-center gap-3'
          style={{ fontFamily: 'Quicksand' }}
        >
          <p className='line-through'>${productPrice}.00</p>
          <p className='text-red-600'>${offerPrice.toFixed(2)}</p>
        </div>
        {/* product brand and type */}
        <div className='text-[16px]'>
          <p
            className='text-[14px] font-medium uppercase text-blue-500'
            style={{ fontFamily: 'Quicksand' }}
          >
            <span className='text-black dark:text-white'>Brand ~</span>{' '}
            {brandName}
          </p>
          <p
            className='text-[14px] font-medium uppercase text-blue-500'
            style={{ fontFamily: 'Quicksand' }}
          >
            <span className='text-black dark:text-white'>Category ~</span>{' '}
            {productType}
          </p>
        </div>
        {/* product color */}
        <div className='flex gap-3 justify-center items-center mt-3'>
          {productColors?.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: `${color}` }}
              className={`relative rounded-full w-[18px] h-[18px] before:absolute before:top-[-3px] before:left-[-3px] before:right-0 before:bottom-0 before:border-2 before:border-${color} before:rounded-full before:w-[24px] before:h-[24px] before:opacity-[0.49]`}
            ></button>
          ))}
        </div>
        <div>
          <StarRating initialRating={product?.productRating} />
        </div>
        {/* details & add cart buttons */}
        <div className='flex justify-center items-center gap-2 flex-wrap'>
          <GlassButton
            text='Add To Cart'
            icon={<AiOutlineShoppingCart className='text-[22px]' />}
            handleOnClick={() => {
              handleProductDetailsClick(_id);
            }}
          />
          <GlassButton
            icon={<RiPagesLine className='text-[22px]' />}
            text='View Details'
            handleOnClick={() => {
              handleProductDetailsClick(_id, brandName);
            }}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
  handleProductDetailsClick: PropTypes.func,
  handleProductUpdateClick: PropTypes.func,
};

export default Card;
