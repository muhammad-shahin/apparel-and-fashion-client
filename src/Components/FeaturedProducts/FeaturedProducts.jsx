import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';

const FeaturedProducts = ({ products }) => {
  const [womenProducts, setWomenProducts] = useState([]);
  useEffect(() => {
    fetch('/womenProducts.json')
      .then((res) => res.json())
      .then((data) => setWomenProducts(data));
  }, []);

  // Original JSON data with 20 products
  const originalData = products;

  // Function to get a random subset of products
  function getRandomSubset(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Randomly select 8 products for "Best Seller Products"
  const bestSellers = getRandomSubset(originalData, 8);

  // Randomly select 8 products for "Trending Products"
  const trendingProducts = getRandomSubset(originalData, 8);

  return (
    <div>
      {/* best seller products section */}
      <Heading
        title={'Best Seller'}
        subTitle={'Best Seller Products Of This Week'}
      />
      <div className='flex flex-wrap justify-center items-center gap-8 duration-500 text-center'>
        {bestSellers.map((product) => (
          <ProductCard
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
        {bestSellers.map((product) => (
          <ProductCard
            key={product.productId}
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
        {womenProducts.map((product) => (
          <ProductCard
            key={product.productId}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

FeaturedProducts.propTypes = {
  product: PropTypes.array,
};

export default FeaturedProducts;
