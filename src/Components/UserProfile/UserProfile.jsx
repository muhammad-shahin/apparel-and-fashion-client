import './UserProfile.css';
import { NavLink } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { FaRegNewspaper } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';

const UserProfile = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className={`bg-[#fbefdf] p-5 text-center appear-style relative z-50`}>
      <img
        src={user?.photoURL}
        className='rounded-full w-[64px] object-cover mx-auto'
      />
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
          to='/take-quiz'
        >
          <RiDashboardFill />
          Take Quiz
        </NavLink>
        <NavLink
          className=' font-medium text-[18px] flex justify-center items-center gap-3'
          to='/submitted-quiz'
        >
          <FaRegNewspaper />
          Submitted Quiz
        </NavLink>
      </div>
      <hr className='w-full h-[2px] bg-gray-300 mt-3' />
      <button
        className='px-5 py-2 bg-[#F9A51A] rounded-full font-medium text-white hover:scale-[1.1] hover:bg-red-500 duration-700 my-4'
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
