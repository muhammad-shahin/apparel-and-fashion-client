import { useNavigate, useParams } from 'react-router-dom';
import AdsSlider from '../AdsSlider/AdsSlider';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Lottie from 'lottie-react';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';

const BrandProducts = () => {
  const [adsData, setAdsData] = useState([]);
  const [productData, setProductData] = useState([]);
  const { brandName } = useParams();
  const navigate = useNavigate();
  const handleProductDetailsClick = (id) => {
    navigate(`/productDetails/${brandName}/${id}`);
  };
  const handleProductUpdateClick = (id) => {
    navigate(`/updateProduct/${brandName}/${id}`);
  };
  useEffect(() => {
    fetch(`https://apparel-and-fashion-server.vercel.app/brandAdvertisement/${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setAdsData(data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://apparel-and-fashion-server.vercel.app/products/${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);
  if (productData.length > 0) {
    return (
      <section>
        <AdsSlider sliderData={adsData} />

        {/* card section */}
        <div className='flex flex-wrap justify-center items-center gap-8 text-center my-10'>
          {productData.map((product) => (
            <Card
              key={product._id}
              product={product}
              handleProductDetailsClick={handleProductDetailsClick}
              handleProductUpdateClick={handleProductUpdateClick}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='text-5xl text-center'>No Product Available</h1>
        <Lottie
          loop
          animationData={notAvailableAnim}
        />
      </div>
    );
  }
};

export default BrandProducts;
