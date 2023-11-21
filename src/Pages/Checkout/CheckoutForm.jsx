import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import GlassButton from '../../Components/GlassButton/GlassButton';
import useCart from '../../Hooks/useCart';
import useAxios from '../../Hooks/useAxios';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CheckoutForm = ({ billingInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  //   const [, , totals] = useCart('checkout form');
  const [, totals] = JSON.parse(localStorage.getItem('cartData'));

  const secureAxios = useAxios();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    secureAxios
      .post('/create-payment-intent', { price: totals.totalCartPrice })
      .then((res) => {
        setClientSecret(res?.data?.clientSecret);
      });
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('Stripe Payment Error : ', error);
      setErrorMessage(error.message);
    } else {
      console.log('Stripe Payment Success : ', paymentMethod);
      setErrorMessage('');
    }

    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: billingInfo?.billingName || 'anonymous',
            email: billingInfo?.billingEmail !== '' || 'anonymous@email.com',
            phone: billingInfo?.billingPhone || 'anonymous',
          },
        },
      })
      .then((result) => {
        console.log('Payment Success or Error Info: ', result);
        if (result.paymentIntent?.status === 'succeeded') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Payment Completed Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    if (paymentIntent) {
      console.log('Payment Intent: ', paymentIntent);
    }
    if (
      confirmError?.type === 'card_error' ||
      error?.type === 'validation_error'
    ) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage('An unexpected error occurred.');
    }
  };
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className='w-[420px] p-5 rounded-sm'
      >
        <CardElement
          className='border-2 p-3 rounded-lg border-blue-400'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        ></CardElement>
        <p className='text-red-500 text-center mt-2'>{errorMessage}</p>
        <div className='w-fit mx-auto mt-6'>
          <GlassButton
            type='submit'
            disabled={!stripe}
            text='Pay'
          >
            Pay
          </GlassButton>
        </div>
      </form>
    </>
  );
};
CheckoutForm.propTypes = {
  billingInfo: PropTypes.object,
};
export default CheckoutForm;
