import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
        >
          {i <= rating ? (
            <AiFillStar className='text-[18px] text-blue-500' />
          ) : (
            <AiOutlineStar className='text-[18px] text-blue-500' />
          )}
        </span>
      );
    }
    return stars;
  };

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  return (
    <div>
      <div className='rating flex justify-center items-center'>
        {renderStars()}
      </div>
      {/* <div id='rating-value'>
        Rating: <span id='current-rating'>{rating}</span>/5
      </div> */}
    </div>
  );
};
StarRating.propTypes = {
  initialRating: PropTypes.string,
};

export default StarRating;
