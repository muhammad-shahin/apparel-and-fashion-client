import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import GlassButton from '../GlassButton/GlassButton';

const ProductCard = ({ product }) => {
  const {
    productName,
    productImages,
    productPrice,
    productVariant,
    productColors,
    productSize,
    productCategory,
  } = product;
  const image1 = productImages?.[0];
  const image2 = productImages?.[1];
  const [visibleButtons, setVisibleButtons] = useState(false);
  return (
    <div
      className='w-[18.75rem] h-[36rem] overflow-hidden relative border-2 border-blue-300 rounded-lg'
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
          className={`card-image w-full h-[400px] object-cover ${
            visibleButtons ? 'zoom-in' : 'zoom-out'
          } `}
          src={visibleButtons ? `${image2}` : `${image1}`}
          alt='Product Image'
        />
        {/* on mouse enter show add to cart buttons */}
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-0 flex justify-center items-center flex-col gap-4 ${
            visibleButtons
              ? 'appearStyle appeared'
              : 'disappearStyle disappeared'
          } `}
        >
          <GlassButton
            text='Add To Cart'
            icon={<AiOutlineShoppingCart className='text-[24px]' />}
          />
          <GlassButton text='Buy Now' />
          <div className='flex gap-4 justify-center items-center'>
            <p className='text-[14px] font-medium text-white bg-gray-500 bg-opacity-[0.49] backdrop-blur-[25px] rounded-full p-2 w-[22px] h-[22px] flex justify-center items-center'>
              {productSize}
            </p>
          </div>
        </div>
      </div>
      {/* text content */}
      <div className='px-4 py-3 flex-grow'>
        <p
          className='md:text-[26px] text-[22px] font-medium uppercase'
          style={{ fontFamily: 'Quicksand' }}
        >
          {productName.slice(0, 30)}
        </p>
        <div
          className='text-[16px] flex justify-center items-center gap-3'
          style={{ fontFamily: 'Quicksand' }}
        >
          <p className='line-through'>$45.00</p>
          <p className='text-red-600'>$20.00</p>
        </div>
        <div className='flex gap-3 justify-center items-center mt-3'>
          {productColors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: `${color}` }}
              className={`relative rounded-full w-[18px] h-[18px] before:absolute before:top-[-3px] before:left-[-3px] before:right-0 before:bottom-0 before:border-2 before:border-${color} before:rounded-full before:w-[24px] before:h-[24px] before:opacity-[0.49]`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
