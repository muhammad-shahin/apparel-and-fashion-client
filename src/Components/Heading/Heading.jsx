import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ title, subTitle }) => {
  return (
    <div className='my-10'>
      <h1
        className='title-bar md:text-[48px] text-[28px] uppercase text-center font-bold'
        style={{ fontFamily: 'DreamAvenue' }}
      >
        {title}
      </h1>
      <p
        className='md:text-[22px] text-[16px] uppercase text-center'
        style={{ fontFamily: 'Quicksand' }}
      >
        {subTitle}
      </p>
    </div>
  );
};

Heading.propTypes = {};

export default Heading;
