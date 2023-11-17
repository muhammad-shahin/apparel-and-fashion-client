import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAdmin = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const secureAxios = useAxios();
  const { data: isAdmin } = useQuery({
    queryKey: ['getAdmin', userData?.uid],
    queryFn: async () => {
      const res = await secureAxios.get(`/users/${userData?.uid}`);
      const role = res?.data?.role;
      return role;
    },
    initialData: null,
  });
  return [isAdmin];
};

export default useAdmin;
