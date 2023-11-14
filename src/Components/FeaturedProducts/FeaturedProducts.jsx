import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import useAxios from '../../AuthProvider/useAxios';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
  const secureAxios = useAxios();
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const navigate = useNavigate();
  // for featured products
  useEffect(() => {
    secureAxios
      .get(`/products`)
      .then((res) => {
        setFeaturedProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleProductDetailsClick = (id, brandName) => {
    // navigate(`/productDetails/${brandName}/${id}`);
    console.log(id, brandName);
  };

  // Function to get a random subset of products
  function getRandomSubset(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Randomly select 4 products for "Best Seller Products"
  const bestSellers = getRandomSubset(featuredProduct, 4);

  // Randomly select 4 products for "Trending Products"
  const trendingProducts = getRandomSubset(featuredProduct, 4);

  // sort women product from products data
  const keyword = 'women';
  const womenProducts = featuredProduct.filter((product) =>
    product.productType.toLowerCase().includes(keyword)
  );

  return (
    <div>
      {/* best seller products section */}
      <Heading
        title={'Best Seller'}
        subTitle={'Best Seller Products Of This Week'}
      />
      <div className='flex flex-wrap justify-center items- gap-8 duration-500 text-center'>
        {bestSellers.map((product, index) => (
          <Card
            key={index}
            product={product}
            handleProductDetailsClick={handleProductDetailsClick}
          />
        ))}
      </div>
      {/* trending products section */}
      <Heading
        title={'Trending Now'}
        subTitle={'Trending Products Of The Day'}
      />
      <div className='flex flex-wrap justify-center items-center gap-8 duration-500 text-center'>
        {trendingProducts.map((product) => (
          <Card
            key={product._id}
            product={product}
            handleProductDetailsClick={handleProductDetailsClick}
          />
        ))}
      </div>
      {/* trending products section */}
      <Heading
        title={'For Women'}
        subTitle={'Latest Girls Collections'}
      />
      <div className='flex flex-wrap justify-center items-center gap-8 duration-500 text-center'>
        {womenProducts.slice(0, 4).map((product, index) => (
          <Card
            key={index}
            product={product}
            handleProductDetailsClick={handleProductDetailsClick}
          />
        ))}
      </div>
    </div>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.array,
};

export default FeaturedProducts;
