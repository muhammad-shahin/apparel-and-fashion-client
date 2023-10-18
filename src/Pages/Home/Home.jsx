import { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import BrandCard from '../../Components/BrandCard/BrandCard';
import Heading from '../../Components/Heading/Heading';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  useEffect(() => {
    fetch('/brandCard.json')
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  // for featured products
  useEffect(() => {
    fetch('/featuredProducts.json')
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProduct(data);
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
            />
          ))}
        </div>
      </div>

      {/* featured Product section */}
      <div className='px-[5%] container mx-auto my-6'>
        <FeaturedProducts products={featuredProduct} />
      </div>
    </div>
  );
};

export default Home;
