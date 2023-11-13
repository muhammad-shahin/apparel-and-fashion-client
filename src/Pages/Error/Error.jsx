import { NavLink } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
const Error = () => {
  PageTitle('404 Page Not Found - Fashion & Apparel');
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center space-y-4'>
      <h1 className='text-[#ff7373] font-bold text-[52px]'>Oops!</h1>
      <p className='text-[#ff7373] font-bold text-[32px] max-w-2xl text-center'>
        The Page You are looking for is not found. You can navigate to pages
        below
      </p>
      <nav className='flex justify-center items-center '>
        <NavLink
          className='text-[18px] font-medium mr-5 hover:text-blue-500'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className='text-[18px] font-medium mr-5 hover:text-blue-500'
          to='/login'
        >
          Login
        </NavLink>
        <NavLink
          className='text-[18px] font-medium mr-5 hover:text-blue-500'
          to='/sign-up'
        >
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Error;
