import { NavLink, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useState } from 'react';
import './Navbar.css';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';
import { TbDna } from 'react-icons/tb';
import { BsArrowRightCircle } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import Button from '../../Components/Button';
import profileIcon from '../../Assets/Icons/profileIcon.svg';
import UserProfile from '../../Components/UserProfile/UserProfile';

const Navbar = () => {
  const { user, logoutUser, showProfile, setShowProfile } =
    useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser();
  };

  return (
    <header id='top'>
      <nav className='pb-3 pt-6 container mx-auto flex justify-between items-center px-[5%] lg:w-auto relative'>
        {/* log */}
        <div>
          <Button
            text='HEXA EVENTS'
            handleOnClick={() => {
              navigate('/');
            }}
            logo={<TbDna className='text-[24px]' />}
          />
        </div>
        {/* nav items */}
        <ul
          className={` lg:static fixed top-[85px] ${
            isOpen ? 'right-0' : 'right-[-100%]'
          } lg:h-auto h-screen lg:w-auto w-[50%] flex lg:flex-row flex-col lg:bg-transparent bg-[#010C2C] lg:text-white text-primaryColor lg:p-0 p-4 justify-start lg:justify-center items-center lg:gap-10 gap-8 duration-700 pt-10 lg:pt-0 z-[100]`}
        >
          <li
            className=' uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li
            className=' uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href='/#services'>Services</a>
          </li>
          <li
            className=' uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/booked-events'>Booked Events</NavLink>
          </li>
          <li
            className=' uppercase text-[18px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href='/pricing'>Pricing</a>
          </li>
          <div>
            {user ? (
              <Button
                text='Logout'
                logo={<IoExitOutline className='md:text-[24px]' />}
                handleOnClick={handleLogOut}
              />
            ) : (
              <Button
                text='LOGIN'
                logo={<BsArrowRightCircle className='md:text-[24px]' />}
                handleOnClick={() => {
                  navigate('/login');
                }}
              />
            )}
          </div>
        </ul>
        {/* login sign up buttons */}

        {/* Profile Icon */}
        <div
          id='profile-icon'
          className='flex justify-center items-center gap-6 group'
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          {user && (
            <img
              src={user.photoURL}
              className='w-[48px] h-[48px] object-cover rounded-full cursor-pointer'
            />
          )}
          {user?.photoURL === null && (
            <img
              className='text-secondaryColor cursor-pointer'
              src={profileIcon}
            />
          )}
          {user && showProfile ? (
            <div className='absolute top-[90px] right-0'>
              <UserProfile />
            </div>
          ) : (
            ''
          )}

          {/* hamburger menu */}
        </div>
        <div className='lg:hidden'>
          <Hamburger
            color='#0284C7'
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
