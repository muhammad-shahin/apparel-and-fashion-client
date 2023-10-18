import PropTypes from 'prop-types';

const GlassedLogo = ({ logo }) => {
  return (
    <div className='rounded-full bg-blue-300 backdrop-blur-[20px] px-4 py-1 bg-opacity-[0.4] flex justify-center items-center gap-2 w-[150px] h-[150px]  '>
      <img
        className='w-[150px] mx-auto'
        src={logo}
      />
    </div>
  );
};

GlassedLogo.propTypes = {
  logo: PropTypes.string,
};

export default GlassedLogo;
