/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import UserProfile from '../../Components/UserProfile/UserProfile';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import DarkTheme from '../../Components/DarkTheme/DarkTheme';

const Navbar = () => {
  const {
    user,
    showProfile,
    setShowProfile,
    updatedCartCount,
    setUpdatedCartCount,
  } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/addedCart/${user.uid}`, {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          setCartCount(data.length);
          setUpdatedCartCount(data.length);
        });
    }
  }, [user, updatedCartCount]);

  return (
    <header className=''>
      <nav className='py-3 container mx-auto flex justify-between items-center w-[90%] xl:w-auto relative text-black dark:text-white'>
        {/* text logo */}
        <div
          className='text-center cursor-pointer'
          onClick={() => {
            navigate('/');
          }}
        >
          <p
            className='lg:text-[58px] text-[38px] leading-none font- '
            style={{ fontFamily: 'DreamAvenue' }}
          >
            F&A
          </p>
          <p
            className='lg:text-[18px] text-[12px] leading-none font- '
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            FASHION & APPAREL
          </p>
        </div>
        {/* nav items */}
        <ul
          className={` xl:static fixed top-[75px] ${
            isOpen ? 'right-0' : 'right-[-100%]'
          } xl:h-auto h-screen xl:w-auto w-[50%] flex xl:flex-row flex-col bg-gray-200 dark:bg-blue-500 xl:opacity-[0.7] backdrop-blur-[25px] xl:px-5 py-2 justify-start xl:justify-center items-center xl:gap-10 gap-8 duration-700 z-[100] xl:rounded-full xl:pt-2 pt-10`}
        >
          <li
            className='text-black dark:text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li
            className='text-black dark:text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/myCart'>My Cart</NavLink>
          </li>
          <li
            className='text-black dark:text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/brand/adidas'>Shop</NavLink>
          </li>
          <li
            className='text-black dark:text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/addProduct'>Add Product</NavLink>
          </li>
          {user ? (
            ''
          ) : (
            <li
              className='text-black dark:text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
        </ul>
        {/* cart icons */}
        <div className='flex justify-center items-center gap-5'>
          <DarkTheme />
          <div className='bg-gray-200 opacity-[0.7] backdrop-blur-lg rounded-full p-2 cursor-pointer hover:opacity-[1] duration-500 hover:bg-blue-500 hover:bg-opacity-[0.39] hover:text-white relative  dark:opacity-[1] dark:text-blue-500'>
            <AiOutlineShoppingCart
              onClick={() => {
                navigate('/myCart');
              }}
              className='text-[22px]'
            />
            {user && (
              <p className='bg-red-600 rounded-full text-[8px] p-1 flex justify-center items-center absolute top-0 right-0 w-[15px] h-[15px] text-white'>
                {cartCount ? cartCount : 0}
              </p>
            )}
          </div>
        </div>
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
        </div>

        {/* hamburger menu */}
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
