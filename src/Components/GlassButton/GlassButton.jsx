import PropTypes from 'prop-types';

const GlassButton = ({ text, icon }) => {
  return (
    <>
      <button className='px-5 py-2 rounded-full bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.49] font-medium text-[18px] text-white uppercase border-2 border-transparent hover:bg-transparent hover:border-blue-500 duration-500 flex justify-center items-center gap-4 w-[200px]'>
        {text}
        {icon}
      </button>
    </>
  );
};

GlassButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
};

export default GlassButton;
