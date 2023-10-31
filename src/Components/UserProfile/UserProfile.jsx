import './UserProfile.css';
import { NavLink } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { VscAccount } from 'react-icons/vsc';

const UserProfile = () => {
  const { user, logoutUser, showProfile } = useContext(AuthContext);

  return (
    <div
      className={`rounded bg-blue-200 backdrop-blur-[25px] bg-opacity-[0.69] p-5 text-center relative z-50`}
    >
      {user?.photoURL !== null ? <img
        src={user?.photoURL}
        className='rounded-full w-[64px] object-cover mx-auto'
      /> : <VscAccount
      className={`text-[64px] text-sky-500 cursor-pointer rounded-full text-center mx-auto ${
        showProfile && 'bg-blue-500 text-white'
      }`}
    />}
      <p className='font-medium text-[14px] mt-2'>Profile Status</p>
      <p
        className={`${
          user?.emailVerified
            ? 'bg-green-300 text-green-600'
            : 'bg-red-300 text-red-600'
        }  px-4 py-1 rounded-full  font-medium w-fit mx-auto mb-4`}
      >
        {user?.emailVerified ? 'Verified' : 'Not Verified'}
      </p>
      <h4 className=' font-medium text-[18px]'>{user?.displayName}</h4>
      <p className='text-[18px] font-semibold  mt-2'>{user?.email}</p>
      <hr className='w-full h-[2px] bg-gray-300 mt-3' />

      {/* Pages */}
      <div className='flex flex-col gap-2 mt-3'>
        <NavLink
          className=' font-medium text-[18px] flex justify-center items-center gap-3'
          to='/addProduct'
        >
          <RiDashboardFill />
          Add New Product
        </NavLink>
        <NavLink
          className=' font-medium text-[18px] flex justify-center items-center gap-3'
          to='/cart'
        >
          <AiOutlineShoppingCart />
          View Cart
        </NavLink>
      </div>
      <hr className='w-full h-[2px] bg-gray-300 mt-3' />
      <button
        className='px-5 py-2 bg-gray-500 rounded-full font-medium text-white hover:scale-[1.1] hover:bg-red-500 duration-700 my-4'
        onClick={() => {
          logoutUser();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
