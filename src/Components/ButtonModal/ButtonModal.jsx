import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FcInfo } from 'react-icons/fc';

const ButtonModal = ({
  buttonModalStatus,
  title,
  message,
  setButtonModalStatus,
  handleAddFieldsBtn,
}) => {
  const buttonModal = useRef(null);

  useEffect(() => {
    if (buttonModalStatus) {
      buttonModal.current.showModal();
    } else {
      buttonModal.current.close();
    }
  }, [buttonModalStatus]);

  return (
    <dialog
      open
      id='buttonmodal'
      ref={buttonModal}
      className='sticky top-0 left-0 w-full h-full bg-transparent'
    >
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit bg-white rounded-lg'>
          <FcInfo className='relative mx-auto -top-8 w-[48px] text-[68px]' />
          <div className='p-5 text-center space-y-4'>
            <h2 className='text-3xl'>{title}</h2>
            <p className='font-normal text-[18px] max-w-[350px] capitalize'>
              {message}
            </p>
            {/* buttons */}
            <div className='flex flex-col justify-center items-center gap-4'>
              <button
                className='w-[250px] px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.69] font-medium text-[18px] text-white uppercase cursor-pointer rounded hover:bg-transparent border-2 border-transparent hover:text-blue-500 hover:border-blue-500 duration-500'
                onClick={() => {
                  handleAddFieldsBtn('size');
                }}
              >
                Add Product Size
              </button>
              <button
                className='w-[250px] px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.69] font-medium text-[18px] text-white uppercase cursor-pointer rounded hover:bg-transparent border-2 border-transparent hover:text-blue-500 hover:border-blue-500 duration-500'
                onClick={() => {
                  handleAddFieldsBtn('image');
                }}
              >
                Add More Image
              </button>
              <button
                className='w-[250px] px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.69] font-medium text-[18px] text-white uppercase cursor-pointer rounded hover:bg-transparent border-2 border-transparent hover:text-blue-500 hover:border-blue-500 duration-500'
                onClick={() => {
                  handleAddFieldsBtn('color');
                }}
              >
                Add Product Color
              </button>
              <button
                className='w-[250px] px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.69] font-medium text-[18px] text-white uppercase cursor-pointer rounded hover:bg-transparent border-2 border-transparent hover:text-blue-500 hover:border-blue-500 duration-500'
                onClick={() => {
                  handleAddFieldsBtn('advertisement');
                }}
              >
                Add Brand Advertisement
              </button>
              <button
                className='w-[250px] px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.69] font-medium text-[18px] text-white uppercase cursor-pointer rounded hover:bg-transparent border-2 border-transparent hover:text-blue-500 hover:border-blue-500 duration-500'
                onClick={() => {
                  handleAddFieldsBtn('brandlogo');
                }}
              >
                Add Brand Logo
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setButtonModalStatus(false);
            }}
            className='text-center bg-sky-600 text-white text-xl w-full py-2 hover:bg-rose-500 transition-all rounded-b-lg'
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

ButtonModal.propTypes = {
  buttonModalStatus: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setButtonModalStatus: PropTypes.func.isRequired,
  handleAddFieldsBtn: PropTypes.func.isRequired,
};

export default ButtonModal;
