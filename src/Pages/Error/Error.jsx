import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center space-y-4'>
      <h1 className='text-[#9873ff] font-bold text-[52px]'>Oops!</h1>
      <p className='text-[#9873ff] font-bold text-[32px] max-w-2xl text-center'>
        The Page You are looking for is not found. You can navigate to pages
        below
      </p>
      <nav className='flex justify-center items-center '>
        <NavLink
          className='text-[18px] font-medium mr-5 hover:text-[#4400fd]'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className='text-[18px] font-medium mr-5 hover:text-[#4400fd]'
          to='/#services'
        >
          Services
        </NavLink>
        <NavLink
          className='text-[18px] font-medium mr-5 hover:text-[#4400fd]'
          to='/login'
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Error;
