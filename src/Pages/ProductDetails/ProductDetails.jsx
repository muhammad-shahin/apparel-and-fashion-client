import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from 'react-router-dom';
import StarRating from '../../Components/StarRating/StarRating';
import GlassButton from '../../Components/GlassButton/GlassButton';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const handleAddToCartClick = (id) => {};
  return (
    <section className='container mx-auto my-12 px-[5%]'>
      <div className='flex justify-center lg:gap-28 gap-8 flex-col lg:flex-row'>
        {/* left side */}
        <div className=''>
          {/* main image */}
          <div className='max-w-[500px]'>
            <img
              className='lg:max-w-[500px] rounded-lg'
              src={product.productImages[0]}
              alt=''
            />
            {/* sub image */}
            <div className='flex justify-center items-center gap-3 my-5'>
              {product.productImages.map((image, index) => (
                <div key={index}>
                  <img
                    className='w-[60px] h-[60px] object-cover object-top rounded-lg'
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right side content */}
        <div>
          {/* name, price, size, add, to cart, description  */}
          <div
            className='space-y-4'
            style={{ fontFamily: 'Quicksand' }}
          >
            <h1 className='text-[32px] font-bold uppercase'>
              {product.productName}
            </h1>
            <p className='text-[18px] font-medium uppercase'>
              Brand ~ <span className='text-blue-400'>{product.brandName}</span>
            </p>
            <div
              className='text-[18px] font-medium flex justify-start items-center gap-3'
              style={{ fontFamily: 'Quicksand' }}
            >
              <p className='line-through'>${product.productPrice}.00</p>
              <p className='text-red-600'>
                ${product.productPrice - (product.productPrice * 30) / 100}.00
              </p>
            </div>
          </div>
          {/* size */}
          <p className='text-[18px] uppercase mt-6 mb-4'>Select Size</p>
          <div className='flex justify-start items-center gap-3'>
            {product.productSize.map((size, index) => (
              <div
                key={index}
                className='rounded-lg flex justify-center items-center border-2 w-[48px] h-[48px] border-gray-300'
              >
                <p className='text-[18px] font-medium uppercase'>S</p>
              </div>
            ))}
          </div>
          {/* add to cart button */}
          <div className='my-10 flex gap-4 flex-wrap'>
            <GlassButton
              text={'Add To Cart'}
              icon={<AiOutlineShoppingCart className='text-[22px]' />}
            />
            <GlassButton
              text={'Wishlist'}
              icon={<AiOutlineHeart className='text-[22px]' />}
            />
          </div>
          {/* description */}
          <div>
            <p className='text-[16px] uppercase lg:max-w-[450px] leading-8'>
              {product.productDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
