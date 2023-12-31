import { useContext, useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import BrandCard from '../../Components/BrandCard/BrandCard';
import Heading from '../../Components/Heading/Heading';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Footer from '../../Layouts/Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  PageTitle('Home - Fashion & Apparel');
  const { setLoading } = useContext(AuthContext);
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  const handleBannerCardClick = (brandName) => {
    navigate(`/brand/${brandName}`);
  };

  useEffect(() => {
    setLoading(true);
    fetch('/brandCard.json')
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  return (
    <div>
      {/* banner section */}
      <Banner />
      {/* brands section */}
      <div className='px-[5%] container mx-auto my-6'>
        <Heading
          title={'Our Brands'}
          subTitle={'Top Brands We Work With'}
        />
        <div className='flex flex-wrap justify-center items-center  gap-8 duration-500 text-center'>
          {cardData.map((card, index) => (
            <BrandCard
              key={index}
              brand={card}
              handleCardClick={handleBannerCardClick}
            />
          ))}
        </div>
      </div>

      {/* featured Product section */}
      <div className='px-[5%] container mx-auto my-6'>
        <FeaturedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
