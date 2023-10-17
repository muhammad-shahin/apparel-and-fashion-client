import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
  return (
    <main className=''>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
