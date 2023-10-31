import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { InfinitySpin } from 'react-loader-spinner';

// // Custom component to render HTML content safely
// const RenderHTML = ({ html }) => (
//   <div dangerouslySetInnerHTML={{ __html: html }} />
// );

const Modal = ({ modalStatus, title, message = false }) => {
  const modal = useRef(null);

  useEffect(() => {
    if (modalStatus) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [modalStatus]);

  return (
    <dialog
      open
      id='modal'
      ref={modal}
      className='rounded-lg p-10'
    >
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit bg-white rounded-lg'>
          <div className='w-fit mx-auto'>
            <InfinitySpin
              width='200'
              color='#6FA3F8'
            />
          </div>

          <div className='p-5 text-center space-y-4'>
            <h2 className='text-3xl'>{title}</h2>
            <p className='font-normal text-[18px] max-w-[350px]'>{message}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

// RenderHTML.propTypes = {
//   html: PropTypes.node,
// };
Modal.propTypes = {
  modalStatus: PropTypes.bool,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Modal;
