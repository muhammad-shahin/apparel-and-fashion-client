import { loadStripe } from '@stripe/stripe-js';
import Heading from '../../Components/Heading/Heading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Input from '../../Components/Input/Input';
import useCart from '../../Hooks/useCart';
import { useState } from 'react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);
const Checkout = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  //   const [cartData, refetch, totals] = useCart();
  const [cartData, totals] = JSON.parse(localStorage.getItem('cartData'));
  const [billingInfo, setBillingInfo] = useState({
    billingName: '',
    billingEmail: '',
    billingPhone: '',
    billingAddress: '',
  });
  const handleBillingInfoChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: fieldValue,
    }));
  };
  return (
    <div className='w-full'>
      <Heading
        title='Checkout'
        subTitle='Complete Your Payment'
      />
      <div className='flex justify-center items-center w-full gap-16'>
        <form className='max-w-sm space-y-6'>
          <p className='lg:text-4xl text-lg'>Billing Info</p>
          <Input
            labelText='Name'
            placeholder='Enter Your Full Name'
            defaultValue={userData?.displayName}
            name='billingName'
            required={true}
            onChange={handleBillingInfoChange}
          />
          <Input
            labelText='Eamil'
            placeholder='Enter Your Email'
            defaultValue={userData?.email}
            name='billingEmail'
            required={true}
            type={'email'}
            onChange={handleBillingInfoChange}
          />
          <Input
            labelText='Phone'
            placeholder='Your Phone Number'
            name='billingPhone'
            required={true}
            onChange={handleBillingInfoChange}
            type='tel'
          />
          <Input
            labelText='Address'
            placeholder='Your Address'
            name='billingAddress'
            required={true}
            onChange={handleBillingInfoChange}
          />
        </form>
        <div className=''>
          {/* right side Total Cart */}
          <div className='min-w-[35%] space-y-6'>
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
                  <p className='text-[18px] font-medium'>
                    ${totals.totalDiscount}
                  </p>
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
              </div>
              <Elements stripe={stripePromise}>
                <CheckoutForm billingInfo={billingInfo} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
