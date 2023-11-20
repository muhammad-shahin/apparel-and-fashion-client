import { useQuery } from '@tanstack/react-query';
import ActionButton from '../../../Components/ActionButton/ActionButton';
import Heading from '../../../Components/Heading/Heading';
import useAxios from '../../../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const secureAxios = useAxios();
  const { data: allProducts } = useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      const response = await secureAxios.get('/products');
      return response.data;
    },
  });
  const navigate = useNavigate();
  const handleUpdate = (brandName, productId) => {
    navigate(`/updateProduct/${brandName}/${productId}`);
  };
  const handleDelete = (productId) => {};
  return (
    <div className='container mx-auto py-10'>
      <Heading
        title='All Products'
        subTitle='update and delete products'
      />
      <table className='w-full border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2'>#</th>
            <th className='border p-2'>Product Name</th>
            <th className='border p-2'>Brand Name</th>
            <th className='border p-2'>Category</th>
            <th className='border p-2'>Action</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          {allProducts?.map((product, index) => (
            <tr
              key={product._id}
              className='border'
            >
              <td className='border p-2'>{index + 1}</td>
              <td className='border p-2'>{product.productName}</td>
              <td className='border p-2'>{product.brandName}</td>
              <td className='border p-2'>{product.productType}</td>
              <td className='border p-2'>
                <ActionButton
                  handleUpdate={() =>
                    handleUpdate(product.brandName, product._id)
                  }
                  handleDelete={() => handleDelete(product._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
