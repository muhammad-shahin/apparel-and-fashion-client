import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';
import GlassedLogo from '../GlassedLogo/GlassedLogo';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const { brandName, brandLogo, brandImage, tagLine } = brand;
  const navigate = useNavigate();
  return (
    <div
      className='w-96 rounded-lg'
      onClick={() => {
        navigate(`/brand/${brandName}`);
      }}
    >
      <Tilt
        className=''
        perspective={1100}
        glareEnable={true}
        glareMaxOpacity={0.9}
        scale={1.02}
        tiltEnable={true}
        glareColor='#58b6f9'
        glarePosition='all'
        glareBorderRadius='8px'
      >
        <div className='rounded-lg h-[550px] bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.5] cursor-pointer border-[4px] border-blue-200 border-opacity-[1.50] relative'>
          <img
            src={brandImage}
            className='absolute top-0 left-0 w-full h-full object-cover rounded-lg z-[-100]'
            loading='lazy'
          />
          <div className='overlay rounded'></div>
          <div className='flex justify-center items-center flex-col h-full'>
            <p
              className='relative md:text-[48px] text-[28px] uppercase text-center text-white mt-auto'
              style={{ fontFamily: 'DreamAvenue' }}
            >
              {brandName}
            </p>
            <p
              className='relative md:text-[18px] text-[18px] uppercase text-center text-white flex'
              style={{ fontFamily: 'Quicksand' }}
            >
              {tagLine}
            </p>
            <div className='stay-loy flex-shrink mt-auto mb-[40px]'>
              <GlassedLogo logo={brandLogo} />
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
