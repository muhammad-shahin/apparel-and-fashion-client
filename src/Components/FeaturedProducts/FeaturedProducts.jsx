import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const FeaturedProducts = () => {
  const [featuredProduct, setFeaturedProduct] = useState([]);
  // for featured products
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProduct(data);
      });
  }, []);
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
      <div className='flex flex-wrap justify-center items-center gap-8 duration-500 text-center'>
        {bestSellers.map((product) => (
          <Card
            key={product.productId}
            product={product}
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
          />
        ))}
      </div>
      {/* trending products section */}
      <Heading
        title={'For Women'}
        subTitle={'Latest Girls Collections'}
      />
      <div className='flex flex-wrap justify-center items-center gap-8 duration-500 text-center'>
        {womenProducts.slice(0, 4).map((product) => (
          <Card
            key={product.productId}
            product={product}
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
