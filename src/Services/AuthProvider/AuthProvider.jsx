import { createContext, useEffect, useState } from 'react';
import { auth } from '../../Configs/firebase.config';
import PropTypes from 'prop-types';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import Swal from 'sweetalert2';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedCartCount, setUpdatedCartCount] = useState(0);
  const googleProvider = new GoogleAuthProvider();

  // email & password sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out function
  const logoutUser = () => {
    return signOut(auth)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Logout',
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Failed To Logout. Please Try Again. ${error.message}`,
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  // onAuth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userId = user?.uid || currentUser?.uid;
      const id = { userId: userId };
      if (currentUser) {
        console.log(id);
        axios
          .post('http://localhost:5000/jwt', id, { withCredentials: true })
          .then((res) => {
            console.log('Response from token : ', res.data);
          })
          .catch((error) => {
            console.log('Error from token : ', error);
          });
      } else {
        axios
          .post('http://localhost:5000/logout', id, { withCredentials: true })
          .then((res) => {
            console.log('Logout response: ', res.data);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // toggle profile on click
  const [showProfile, setShowProfile] = useState(false);

  const authInfo = {
    createUser,
    loginUser,
    signInWithGoogle,
    user,
    logoutUser,
    showProfile,
    setShowProfile,
    loading,
    setLoading,
    updatedCartCount,
    setUpdatedCartCount,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
