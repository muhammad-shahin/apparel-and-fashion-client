import { useEffect, useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import BrandCard from '../../Components/BrandCard/BrandCard';
import { Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [dashboardCard, setDashboardCard] = useState([]);
  useEffect(() => {
    fetch('/adminDashboardCard.json')
      .then((res) => res.json())
      .then((data) => {
        setDashboardCard(data);
      });
  }, []);
  const handleBannerCardClick = (brandName, brandId) => {
    navigate(`/admin/${brandId}`);
  };
  return (
    <div className='container mx-auto py-10'>
      <Heading
        title='Admin Panel'
        subTitle='Wlcome to admin dashboard'
      />
      <div className='flex flex-wrap justify-center items-center  gap-8 duration-500 text-center'>
        {dashboardCard.map((card, index) => (
          <BrandCard
            key={index}
            brand={card}
            handleCardClick={handleBannerCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
