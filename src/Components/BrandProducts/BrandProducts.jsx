import { useNavigate, useParams } from 'react-router-dom';
import AdsSlider from '../AdsSlider/AdsSlider';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

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
    fetch(`http://localhost:5000/brandAdvertisement/${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setAdsData(data);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);
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
};

export default BrandProducts;
