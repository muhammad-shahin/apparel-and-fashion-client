/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import AdsSlider from '../AdsSlider/AdsSlider';
import { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import Lottie from 'lottie-react';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';
import Modal from '../../Services/Utility/Modal';
import Heading from '../Heading/Heading';

const BrandProducts = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [modalStatus, setModalStatus] = useState(false);
  const [adsData, setAdsData] = useState([]);
  const [productData, setProductData] = useState([]);
  const { brandName } = useParams();
  const navigate = useNavigate();
  console.log(brandName);
  const handleProductDetailsClick = (id) => {
    navigate(`/productDetails/${brandName}/${id}`);
  };
  const handleProductUpdateClick = (id) => {
    navigate(`/updateProduct/${brandName}/${id}`);
  };
  useEffect(() => {
    fetch(
      `https://apparel-and-fashion-server.vercel.app/brandAdvertisement/${brandName}`
    )
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
        setLoading(false);
        setModalStatus(false);
      });
  }, []);
  if (loading) {
    return (
      <Modal
        title='Please Wait'
        message='Fetching Data From Server.'
      />
    );
  } else if (productData.length > 0) {
    return (
      <section>
        <AdsSlider sliderData={adsData} />

        <Heading
          title={`${brandName}`}
          subTitle='Latest Collections'
          titleColor={true}
        />
        {/* card section */}
        <div className='flex flex-wrap justify-center items-center gap-8 text-center pb-20'>
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
