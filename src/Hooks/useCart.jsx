import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useCart = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log('user from useCart : ', userData?.uid);
  const secureAxios = useAxios();
  const { data: cartData, refetch } = useQuery({
    queryKey: ['cart', userData?.uid],
    queryFn: async () => {
      if (userData !== null) {
        const response = await secureAxios.get(`/addedCart/${userData.uid}`);
        return response.data;
      }
    },
  });

  return [cartData, refetch];
};

export default useCart;
