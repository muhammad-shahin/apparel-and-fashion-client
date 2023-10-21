import PropTypes from 'prop-types';

const Heading = ({ title, subTitle }) => {
  return (
    <div className='my-10 text-black dark:text-white'>
      <h1
        className='title-bar md:text-[48px] text-[20px] uppercase text-center font-bold before:bg-black after:bg-black dark:after:bg-white dark:before:bg-white'
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
};

export default Heading;
