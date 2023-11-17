import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAdmin = () => {
  const secureAxios = useAxios();
  const { user } = useContext(AuthContext);
  const { data: isAdmin } = useQuery({
    queryKey: ['getAdmin', user],
    queryFn: async () => {
      const res = await secureAxios.get(`/users/:${user?.uid}`);
      const role = res?.data?.role;
      return role;
    },
    initialData: { isAdmin: null },
  });
  return [isAdmin];
};

export default useAdmin;
