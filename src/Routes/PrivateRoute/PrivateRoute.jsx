import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Modal from '../../Services/Utility/Modal';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Services/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (user === '') {
    return (
      <Modal
        title='Please Wait'
        message='Fetching Data From Server.'
      />
    );
  } else if (user) {
    return children;
  } else {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'You Have to Login To Access This Page',
      showConfirmButton: false,
      timer: 2500,
    });
    return (
      <Navigate
        state={location.pathname}
        to='/login'
      />
    );
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
