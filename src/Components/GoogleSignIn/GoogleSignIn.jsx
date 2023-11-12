import Swal from 'sweetalert2';
import firebaseAuthError from '../../Services/Utility/FirebaseAuthError';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../AuthProvider/useAxios';

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle } = useContext(AuthContext);
  const secureAxios = useAxios();
  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const id = { userId: user.uid };
        secureAxios
          .post('/jwt', id)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Logged In Successfully',
              text: 'Redirecting Home Page...',
              showConfirmButton: false,
              timer: 1500,
            });
            // navigate after login
            navigate(location?.state ? location?.state : '/');
          })
          .catch((error) => {
            console.log(error.response);
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Failed To Generate Token',
              text: `Failed To Generate Token. Please Try Again. Error Message: ${error.response.data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => {
        firebaseAuthError(error.message);
      });
  };
  return (
    <div>
      <button
        className='px-5 py-2 hover:bg-blue-500 backdrop-blur-[25px] hover:bg-opacity-[0.69] font-medium text-[18px] hover:text-white uppercase w-full h-full cursor-pointer rounded bg-transparent border-2 hover:border-transparent text-blue-500 border-blue-500 duration-500 flex justify-center items-center gap-3'
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className='text-[26px]' />
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
