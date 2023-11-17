import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin] = useAdmin();

  if (user && isAdmin) {
    return children;
  } else if (loading) {
    return (
      <div>
        <h1 className='text-7xl text-center'>Loading....</h1>
      </div>
    );
  } else {
    return (
      <Navigate
        state={location.pathname}
        to='/'
      />
    );
  }
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
