import { useLoaderData } from 'react-router-dom';
import StarRating from '../../Components/StarRating/StarRating';
import GlassButton from '../../Components/GlassButton/GlassButton';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import Modal from '../../Services/Utility/Modal';

const ProductDetails = () => {
  const product = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const userId = user?.uid;

  const handleAddToCartClick = () => {
    const addToCart = { userId, product };
    fetch('http://localhost:5000/addedCart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cart Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
        } else {
          Swal.fire({
            position: 'error',
            icon: 'success',
            title: 'Failed To Add New In Cart',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <section className='container mx-auto my-12 px-[5%]'>
      <div className='flex justify-center items-center lg:items-start lg:gap-28 gap-8 flex-col lg:flex-row'>
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
            <div className='flex justify-start'>
              <StarRating initialRating={product.productRating} />
            </div>
          </div>
          {/* size */}
          <p className='text-[18px] uppercase mt-4 mb-4'>Select Size</p>
          <div className='flex justify-start items-center gap-3'>
            {product.productSize.map((size, index) => (
              <div
                key={index}
                className='rounded-lg flex justify-center items-center border-2 w-[48px] h-[48px] border-gray-300'
              >
                <p className='text-[18px] font-medium uppercase'>{size}</p>
              </div>
            ))}
          </div>
          {/* add to cart button */}
          <div className='my-10 flex gap-4 flex-wrap'>
            <GlassButton
              text={'Add To Cart'}
              icon={<AiOutlineShoppingCart className='text-[22px]' />}
              handleOnClick={handleAddToCartClick}
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
      <Modal
        title='Adding Product To Cart'
        message='Please Wait Uploading Product In Database'
        modalStatus={showModal}
      />
    </section>
  );
};

export default ProductDetails;
