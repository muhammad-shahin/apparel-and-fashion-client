import { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import BrandCard from '../../Components/BrandCard/BrandCard';
import Heading from '../../Components/Heading/Heading';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch('/brandCard.json')
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Banner />
      <div className='px-[5%] container mx-auto'>
        <Heading
          title={'Our Brands'}
          subTitle={'Top Brands We Work With'}
        />
        <div className='flex flex-wrap justify-center items-center  gap-8 duration-500 text-center'>
          {cardData.map((card, index) => (
            <BrandCard
              key={index}
              brand={card}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
