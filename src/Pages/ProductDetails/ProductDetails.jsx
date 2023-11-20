import { useLoaderData, useParams } from 'react-router-dom';
import StarRating from '../../Components/StarRating/StarRating';
import GlassButton from '../../Components/GlassButton/GlassButton';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import Modal from '../../Services/Utility/Modal';
import useAxios from '../../Hooks/useAxios';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { useMutation, useQuery } from '@tanstack/react-query';
import useCart from '../../Hooks/useCart';

const ProductDetails = () => {
  PageTitle('Product Details - Fashion & Apparel');
  const secureAxios = useAxios();
  const [, refetch] = useCart('Product Details');
  const { brandName, productId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { user, setUpdatedCartCount, updatedCartCount } =
    useContext(AuthContext);
  const userId = user?.uid;

  // get the product data
  const { data: product } = useQuery({
    queryKey: ['productDetails', user],
    queryFn: async () => {
      const response = await secureAxios.get(
        `/products/${brandName}/${productId}`
      );
      return response.data;
    },
  });

  // post add to cart data usign useMutation
  const addToCartMutation = useMutation({
    mutationFn: async (addToCartData) => {
      const response = await secureAxios.post('/addedCart', addToCartData);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        refetch();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cart Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed To Add On Cart',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  });

  const handleAddToCartClick = () => {
    const addToCart = { userId, product };
    addToCartMutation.mutate(addToCart);
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
              src={product?.productImages[0]}
              loading='lazy'
            />
            {/* sub image */}
            <div className='flex justify-center items-center gap-3 my-5'>
              {product?.productImages.map((image, index) => (
                <div key={index}>
                  <img
                    className='w-[60px] h-[60px] object-cover object-top rounded-lg'
                    src={image}
                    loading='lazy'
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
              {product?.productName}
            </h1>
            <p className='text-[18px] font-medium uppercase'>
              Brand ~{' '}
              <span className='text-blue-400'>{product?.brandName}</span>
            </p>
            <div
              className='text-[18px] font-medium flex justify-start items-center gap-3'
              style={{ fontFamily: 'Quicksand' }}
            >
              <p className='line-through'>${product?.productPrice}.00</p>
              <p className='text-red-600'>
                ${product?.productPrice - (product?.productPrice * 30) / 100}.00
              </p>
            </div>
            <div className='flex justify-start'>
              <StarRating initialRating={product?.productRating} />
            </div>
          </div>
          {/* size */}
          <p className='text-[18px] uppercase mt-4 mb-4'>Select Size</p>
          <div className='flex justify-start items-center gap-3'>
            {product?.productSize?.map((size, index) => (
              <div
                key={index}
                className='rounded-lg flex justify-center items-center border-2 px-3 py-1 border-gray-300 hover:bg-gray-300 duration-500 cursor-pointer'
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
              {product?.productDescription}
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
