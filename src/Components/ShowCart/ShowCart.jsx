/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import SizeDropdown from '../../Components/SizeDropdown/SizeDropdown';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import GlassButton from '../../Components/GlassButton/GlassButton';
import { useEffect, useRef, useState } from 'react';
const ShowCart = ({ cartData, handleDeleteCart, cartId }) => {
  const { productName, productSize, productType, productPrice, productImages } =
    cartData;
  const quantityRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [subTotalPrice, setSubTotalPrice] = useState(quantity * productPrice);
  const [delivery, setDelivery] = useState(
    (quantity * productPrice * 10) / 100
  );
  const [discount, setDiscount] = useState((productPrice * 30) / 100);

  useEffect(() => {
    const value = quantityRef.current.value;
    setQuantity(value);
  }, [quantity]);

  return (
    <div className='border-2 rounded border-blue-500 border-opacity-[0.49] backdrop-blur-[5px] flex lg:justify-between justify-center items-center lg:items-start lg:gap-5 w-full lg:flex-row flex-col pr-3'>
      {/* left side */}
      <div className='flex lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center gap-4 lg:min-w-[70%] w-full'>
        <div className=''>
          <img
            className='lg:max-w-[250px] lg:min-h-[320px] object-cover rounded-l'
            src={productImages[0]}
            loading='lazy'
          />
        </div>
        <div className='text-center lg:text-left py-4'>
          <p
            style={{ fontFamily: 'Quicksand' }}
            className='text-[22px] font-bold uppercase lg:max-w-[250px] '
          >
            {productName}
          </p>
          <p className='text-[18px] font-medium capitalize text-gray-500 mt-2 mb-4'>
            {productType}
          </p>
          <div className='flex justify-center lg:justify-start items-center lg:items-start lg:flex-col gap-4 mb-3 '>
            {/* size  */}
            <div className='flex justify-start items-center gap-3'>
              <p className='text-[18px] font-medium capitalize text-gray-500'>
                Size :
              </p>
              <SizeDropdown sizes={productSize} />
            </div>
            {/* quantity */}
            <div className='flex justify-start items-center gap-3'>
              <p className='text-[18px] font-medium capitalize text-gray-500'>
                Quantity :
              </p>
              <input
                ref={quantityRef}
                className='border border-gray-300 dark:bg-black w-[60px] outline-none rounded text-center font-medium'
                defaultValue={1}
                type='number'
                onChange={() => {
                  setQuantity(quantityRef.current.value);
                }}
              />
            </div>
          </div>
          <div className='flex justify-center lg:justify-start items-center gap-4 my-1'>
            <AiOutlineHeart className='text-[28px] text-black cursor-pointer' />
            <RiDeleteBin6Line
              onClick={() => {
                handleDeleteCart(cartId);
              }}
              className='text-[28px] text-black cursor-pointer'
            />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='pr-6 py-4 lg:min-w-[200px] w-[90%] '>
        <p
          style={{ fontFamily: 'Quicksand' }}
          className='text-[22px] font-bold uppercase mb-3 lg:text-right text-center'
        >
          Summery
        </p>
        <div className='space-y-3'>
          <div className='flex justify-between items-center'>
            <p className='text-[18px] font-medium'>Subtotal : </p>
            <p className='text-[18px] font-medium'>
              ${subTotalPrice.toFixed(2)}
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-[18px] font-medium'>Delivery : </p>
            <p className='text-[18px] font-medium'>${delivery.toFixed(2)}</p>
          </div>
          <hr className='w-full h-[2px] bg-gray-300' />
          <div className='flex justify-between items-center'>
            <p className='text-[18px] font-medium'>Discount : </p>
            <p className='text-[18px] font-medium'>-${discount.toFixed(2)}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-[18px] font-medium'>Tax : </p>
            <p className='text-[18px] font-medium'>
              ${(productPrice * 12) / 100}
            </p>
          </div>
          <hr className='w-full h-[2px] bg-gray-300' />
          <div className='w-fit mx-auto'>
            <GlassButton text='Details' />
          </div>
        </div>
      </div>
    </div>
  );
};

ShowCart.propTypes = {
  cartData: PropTypes.object,
  handleDeleteCart: PropTypes.func,
  cartId: PropTypes.string,
};

export default ShowCart;
