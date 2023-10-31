import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  } else if (loading) {
    return (
      <div>
        <h1 className='text-7xl text-center'>Loading....</h1>
      </div>
    );
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
