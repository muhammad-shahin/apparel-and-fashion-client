import { NavLink, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useState } from 'react';
import './Navbar.css';
import UserProfile from '../../Components/UserProfile/UserProfile';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';
import { AiOutlineShoppingCart, AiOutlineFolderAdd } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';

const Navbar = () => {
  const { user, showProfile, setShowProfile } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className=''>
      <nav className='py-3 container mx-auto flex justify-between items-center w-[90%] xl:w-auto relative'>
        {/* text logo */}
        <div
          className='text-center cursor-pointer'
          onClick={() => {
            navigate('/');
          }}
        >
          <p
            className='lg:text-[58px] text-[38px] leading-none font- text-black'
            style={{ fontFamily: 'DreamAvenue' }}
          >
            F&A
          </p>
          <p
            className='lg:text-[18px] text-[12px] leading-none font- text-black'
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            FASHION & APPAREL
          </p>
        </div>
        {/* nav items */}
        <ul
          className={` xl:static fixed top-[75px] ${
            isOpen ? 'right-0' : 'right-[-100%]'
          } xl:h-auto h-screen xl:w-auto w-[50%] flex xl:flex-row flex-col bg-gray-200 xl:opacity-[0.7] backdrop-blur-[25px] xl:px-5 py-2 justify-start xl:justify-center items-center xl:gap-10 gap-8 duration-700 z-[100] xl:rounded-full xl:pt-2 pt-10`}
        >
          <li
            className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li
            className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/my'>My Cart</NavLink>
          </li>
          <li
            className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/addProduct'>Add Product</NavLink>
          </li>
          <li
            className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li
            className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/a'>Home</NavLink>
          </li>
        </ul>

        {/* Profile Icon */}
        <div
          id='profile-icon'
          className='flex justify-center items-center gap-6 group'
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          {user && user.photoURL !== null && (
            <img
              src={user.photoURL}
              className='w-[48px] h-[48px] object-cover rounded-full cursor-pointer'
            />
          )}
          {user?.photoURL === null && (
            <VscAccount
              className={`text-[32px] text-sky-500 cursor-pointer rounded-full ${
                showProfile && 'bg-blue-500 text-white'
              }`}
            />
          )}
          {user && showProfile ? (
            <div className='absolute lg:top-[100px] top-[90px] right-0'>
              <UserProfile />
            </div>
          ) : (
            ''
          )}

          {/* cart icons */}
          <div className='flex justify-center items-center gap-5'>
            <div className='bg-gray-200 opacity-[0.7] backdrop-blur-lg rounded-full p-2 cursor-pointer hover:opacity-[1] duration-500 hover:bg-blue-500 hover:bg-opacity-[0.39] hover:text-white'>
              <AiOutlineFolderAdd
                onClick={() => {
                  navigate('/addProduct');
                }}
                className='text-[22px]'
              />
            </div>
            <div className='bg-gray-200 opacity-[0.7] backdrop-blur-lg rounded-full p-2 cursor-pointer hover:opacity-[1] duration-500 hover:bg-blue-500 hover:bg-opacity-[0.39] hover:text-white'>
              <AiOutlineShoppingCart
                onClick={() => {
                  navigate('/myCart');
                }}
                className='text-[22px]'
              />
            </div>
          </div>

          {/* hamburger menu */}
        </div>
        <div className='xl:hidden'>
          <Hamburger
            color='#000'
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>
      <hr className='text-primaryColor' />
    </header>
  );
};

export default Navbar;
