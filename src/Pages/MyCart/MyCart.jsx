import SizeDropdown from '../../Components/SizeDropdown/SizeDropdown';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import GlassButton from '../../Components/GlassButton/GlassButton';

const MyCart = () => {
  const handleDeleteCart = () => {
    console.log('delete');
  };
  return (
    <section className='container mx-auto px-[5%] my-10'>
      <h1
        style={{ fontFamily: 'Quicksand' }}
        className='text-[32px] font-bold uppercase'
      >
        Cart Items
      </h1>
      <div className='border-2 rounded border-blue-500 border-opacity-[0.49] backdrop-blur-[5px] flex justify-between items-start'>
        {/* left side */}
        <div className='flex justify-start items-start gap-4'>
          <div className=''>
            <img
              className='max-w-[250px] min-h-[280px] object-cover rounded-l'
              src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e097434216b14106afbce6edd20b63e5_9366/Adicolor_Classics_SST_Track_Jacket_Blue_IL2493_23_hover_model.jpg'
            />
          </div>
          <div className=' py-4'>
            <p
              style={{ fontFamily: 'Quicksand' }}
              className='text-[22px] font-bold uppercase'
            >
              Product Name Here
            </p>
            <p className='text-[18px] font-medium capitalize text-gray-500 mt-2 mb-4'>
              Product Type Here
            </p>
            <div className='flex justify-start items-start gap-4 mb-3 flex-col'>
              {/* size  */}
              <div className='flex justify-start items-center gap-3'>
                <p className='text-[18px] font-medium capitalize text-gray-500'>
                  Size :
                </p>
                <SizeDropdown sizes={['S', 'M', 'L']} />
              </div>
              {/* quantity */}
              <div className='flex justify-start items-center gap-3'>
                <p className='text-[18px] font-medium capitalize text-gray-500'>
                  Quantity :
                </p>
                <input
                  className='border border-gray-300 w-[60px] outline-none rounded text-center font-medium'
                  defaultValue={1}
                  type='number'
                />
              </div>
            </div>
            <div className='flex justify-start items-center gap-4'>
              <AiOutlineHeart className='text-[28px] text-black cursor-pointer' />
              <RiDeleteBin6Line
                className='text-[28px] text-black cursor-pointer'
                onClick={() => {
                  handleDeleteCart('id');
                }}
              />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='pr-6 py-4 min-w-[200px]'>
          <p
            style={{ fontFamily: 'Quicksand' }}
            className='text-[22px] font-bold uppercase mb-3 text-right'
          >
            Summery
          </p>
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>Subtotal : </p>
              <p className='text-[18px] font-medium'>$450.50</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>Delivery : </p>
              <p className='text-[18px] font-medium'>$4.00</p>
            </div>
            <hr className='w-full h-[2px] bg-gray-300' />
            <div className='flex justify-between items-center'>
              <p className='text-[18px] font-medium'>Total : </p>
              <p className='text-[18px] font-medium'>$4.00</p>
            </div>
            <hr className='w-full h-[2px] bg-gray-300' />
            <GlassButton text='Checkout' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
