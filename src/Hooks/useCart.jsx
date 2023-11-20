import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { useState } from 'react';

const useCart = (pageName) => {
  console.log('Request From : ', pageName);
  const userData = JSON.parse(localStorage.getItem('userData'));
  const secureAxios = useAxios();
  const [totals, setTotals] = useState({});
  const { data: cartData, refetch } = useQuery({
    queryKey: ['cart', userData?.uid],
    queryFn: async () => {
      if (userData !== null) {
        const response = await secureAxios.get(`/addedCart/${userData.uid}`);
        setTotals(calculateTotalCart(response.data));
        return response.data;
      }
    },
  });
  localStorage.setItem('cartData', JSON.stringify([cartData, totals]));
  return [cartData, refetch, totals];
};

const calculateTotalCart = (cartData) => {
  let totals = {
    totalProduct: cartData.length,
    totalCartPrice: 0.0,
    totalDiscount: 0.0,
    totalTax: 0.0,
    totalDeliveryCharge: 0.0,
  };

  cartData?.forEach((data) => {
    const productPrice = parseInt(data.product.productPrice);
    const offerPrice = parseInt(data.product.offerPrice);

    // Calculate the totals
    const discount = productPrice - offerPrice;
    const tax = 0.12 * productPrice; // 12% tax
    const deliveryCharge = 0.0; // Assuming delivery charge is 0

    // Update totals
    totals.totalCartPrice += offerPrice + tax;
    totals.totalDiscount += discount;
    totals.totalTax += tax;
    totals.totalDeliveryCharge += deliveryCharge;
  });
  // Round all totals to two decimal places
  totals.totalCartPrice = totals.totalCartPrice.toFixed(2);
  totals.totalDiscount = totals.totalDiscount.toFixed(2);
  totals.totalTax = totals.totalTax.toFixed(2);
  totals.totalDeliveryCharge = totals.totalDeliveryCharge.toFixed(2);
  return totals;
};

export default useCart;
