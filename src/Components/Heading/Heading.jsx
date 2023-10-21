import PropTypes from 'prop-types';

const Heading = ({ title, subTitle, titleColor }) => {
  return (
    <div className='my-10 text-black dark:text-white'>
      <h1
        className={`title-bar md:text-[48px] text-[20px] uppercase text-center font-bold  dark:after:bg-white dark:before:bg-white dark:text-white ${
          titleColor
            ? 'text-blue-400 before:bg-blue-400 after:bg-blue-400'
            : 'before:bg-black after:bg-black text-black'
        }`}
        style={{ fontFamily: 'DreamAvenue' }}
      >
        {title}
      </h1>
      <p
        className='md:text-[22px] text-[14px] uppercase text-center'
        style={{ fontFamily: 'Quicksand' }}
      >
        {subTitle}
      </p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleColor: PropTypes.bool,
};

export default Heading;
