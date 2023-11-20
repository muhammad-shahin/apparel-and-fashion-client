import { RxUpdate } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import PropTypes from 'prop-types';

const ActionButton = ({ handleUpdate, handleDelete }) => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <button
        className='bg-blue-400 rounded-full p-2 hover:bg-red-600 duration-500'
        onClick={handleUpdate}
        title='Update'
      >
        <RxUpdate className='text-[22px] text-white' />
      </button>
      <button
        className='bg-blue-400 rounded-full p-2 hover:bg-red-600 duration-500'
        onClick={handleDelete}
        title='Delete'
      >
        <RiDeleteBin6Line className='text-[22px] text-white' />
      </button>
    </div>
  );
};

ActionButton.propTypes = {
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default ActionButton;
