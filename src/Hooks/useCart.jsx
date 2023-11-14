import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useCart = () => {
  const secureAxios = useAxios();
  const { user } = useContext(AuthContext);
  const { data: cartData } = useQuery({
    queryKey: ['cart', user.uid],
    queryFn: async () => {
      const response = await secureAxios.get(`/addedCart/${user?.uid}`);
      return response.data;
    },
  });

  return [cartData];
};

export default useCart;
