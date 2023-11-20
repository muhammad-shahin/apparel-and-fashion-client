import PropTypes from 'prop-types';

const GlassButton = ({ text, icon, handleOnClick, disabled, type }) => {
  return (
    <>
      <button
        className='px-5 xl:py-2 py-1 rounded-full bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.59] font-medium xl:text-[18px] text-[14px] text-white uppercase border-2 border-transparent hover:bg-transparent hover:border-blue-500 hover:text-blue-500 duration-500 flex justify-center items-center gap-4 w-full min-w-[120px]'
        onClick={handleOnClick}
        disabled={disabled}
        type={type}
      >
        {text}
        {icon}
      </button>
    </>
  );
};

GlassButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
  handleOnClick: PropTypes.func,
  disabled: PropTypes.any,
};

export default GlassButton;
