import { useState } from 'react';
import PropTypes from 'prop-types';
import { SlArrowDown } from 'react-icons/sl';

const SizeDropdown = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setIsDropdownOpen(false);
  };

  return (
    <div className='size-dropdown relative'>
      <div
        className={`selected-size cursor-pointer bg-gray-300 px-4 rounded border border-transparent ${
          isDropdownOpen ? 'border-gray-400' : ''
        }`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedSize}
        <SlArrowDown
          className={`w-4 h-4 ml-2 inline transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isDropdownOpen && (
        <ul className='size-options absolute mt-2 py-2 bg-white rounded border shadow-md'>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`cursor-pointer p-2 ${
                size === selectedSize ? 'selected' : ''
              }`}
            >
              {size}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SizeDropdown.propTypes = {
  sizes: PropTypes.array,
};

export default SizeDropdown;
