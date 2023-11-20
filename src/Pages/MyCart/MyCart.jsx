import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ShowCart from '../../Components/ShowCart/ShowCart';
import GlassButton from '../../Components/GlassButton/GlassButton';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
import useCart from '../../Hooks/useCart';

const MyCart = () => {
  PageTitle('My Cart - Fashion & Apparel');
  const navigate = useNavigate();
  const secureAxios = useAxios(navigate);
  const { user } = useContext(AuthContext);
  const [cartData, refetch, totals] = useCart('My Cart');
  const handleDeleteCart = (cartId) => {
    Swal.fire({
      title: 'Are You Sure Want to Delete This Product From Cart?',
      showCancelButton: true,
      confirmButtonText: 'Yes Delete!',
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#f30101',
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios
          .delete(`/addedCart/${user?.uid}/${cartId}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              // setUpdatedCartCount(updatedCartCount - 1);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Deleted Successfully',
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Failed To Delete',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <section className='container mx-auto px-[5%] py-10 flex lg:justify-between gap-10 lg:flex-row flex-col-reverse h-full'>
      <div className='w-full space-y-6 dark:text-white'>
        <h1
          style={{ fontFamily: 'Quicksand' }}
          className='text-[32px] font-bold uppercase'
        >
          Cart Items
        </h1>
        {cartData?.map((cart, index) => (
          <ShowCart
            key={index}
            cartData={cart.product}
            handleDeleteCart={handleDeleteCart}
            cartId={cart._id}
          />
        ))}
      </div>

      {/* right side Total Cart */}
      <div className='min-w-[35%] space-y-6'>
        <h1
          style={{ fontFamily: 'Quicksand' }}
          className='text-[32px] font-bold uppercase'
        >
          Total Cart
        </h1>
        <div className='w-full rounded border-2 border-blue-500 border-opacity-[0.49] backdrop-blur-[5px] px-6 py-4'>
          <p
            style={{ fontFamily: 'Quicksand' }}
            className='text-[22px] font-bold uppercase mb-3 text-center'
          >
            TOTal cart PRICE
          </p>
          <div className='space-y-6'>
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>
                Total Product Quantity :{' '}
              </p>
              <p className='text-[18px] font-medium'>{cartData?.length}</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>
                Total Delivery Charge :{' '}
              </p>
              <p className='text-[18px] font-medium'>
                ${totals.totalDeliveryCharge}
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>Total Discount : </p>
              <p className='text-[18px] font-medium'>${totals.totalDiscount}</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>Total Tax : </p>
              <p className='text-[18px] font-medium'>${totals.totalTax}</p>
            </div>
            <hr className='w-full h-[2px] bg-gray-300' />
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>Total Price : </p>
              <p className='text-[18px] font-medium'>
                ${totals.totalCartPrice}
              </p>
            </div>
            <hr className='w-full h-[2px] bg-gray-300' />
            <div className='mx-auto w-fit'>
              <GlassButton
                text='Checkout'
                handleOnClick={() => {
                  navigate('/checkout');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
