import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
const Input = ({
  name,
  type,
  placeholder,
  onChange,
  errorMessage,
  labelText,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-[100%] relative'>
      <label className='text-[14px] font-medium'>
        {labelText}{' '}
        {labelText && <span className='text-red-600 text-[18px]'>*</span>}{' '}
      </label>
      <input
        className='w-[100%] border-2 border-gray-200 px-5 py-2 text-[18px] font-medium text-[#000] placeholder:text-[#959292] placeholder:text-[16px] rounded outline-2 outline-blue-300'
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      {type === 'password' && (
        <AiFillEye
          title='Click To Show or Hide Password'
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className={`absolute top-[40px] md:top-[35px] md:right-[20px] right-[10px] text-[24px] md:text-[32px] ${
            showPassword ? 'text-sky-500' : 'text-gray-700'
          } cursor-pointer`}
        />
      )}
      {errorMessage && (
        <p className='text-[14px] text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
