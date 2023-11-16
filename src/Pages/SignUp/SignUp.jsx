import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Configs/firebase.config';
import firebaseAuthError from '../../Services/Utility/FirebaseAuthError';
import passwordErrorChecker from '../../Services/Utility/PasswordErrorChecker';
import Modal from '../../Services/Utility/Modal';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Form from '../../Components/Form/Form';
import signUpAnim from '../../assets/Animation/registration.json';
import PageTitle from '../../Components/PageTitle/PageTitle';
import CreateToken from '../../api/CreateToken';
import RegisterUserInDatabase from '../../api/RegisterUserInDatabase';

const SignUp = () => {
  PageTitle('Sign Up - Fashion & Apparel');
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [showModal, setShowModal] = useState(false);

  // show password regular expression error
  const handlePasswordChange = (e) => {
    if (e.target.name === 'password') {
      setPasswordErrorMessage(passwordErrorChecker(e));
    } else {
      setConfirmPasswordErrorMessage(passwordErrorChecker(e));
    }
  };

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    setShowModal(true);
    if (password === confirmPassword) {
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            userName: user?.displayName,
            userEmail: user?.email,
            userId: user?.uid,
            role: 'Site User',
          };
          const id = { userId: user.uid };
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              CreateToken(id);
              RegisterUserInDatabase(userData);
            })
            .catch((error) => {
              console.log(error.message);
            });
          setShowModal(false);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Account Created Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate after signup
          navigate(location?.state ? location?.state : '/');
        })
        .catch((error) => {
          firebaseAuthError(error.code);
        });
    } else {
      setShowModal(false);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Password Didn't Match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const signUpInputFields = [
    {
      name: 'text',
      type: 'name',
      placeholder: 'Enter Full Name',
      labelText: 'Enter Full Name',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter Email',
      labelText: 'Your Valid Email',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      onChange: handlePasswordChange,
      errorMessage: passwordErrorMessage,
      labelText: 'Password',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Enter Confirm Password',
      onChange: handlePasswordChange,
      errorMessage: confirmPasswordErrorMessage,
      labelText: 'Confirm Password',
    },
  ];
  console.log(signUpInputFields);
  return (
    <section className=''>
      <Form
        title='Create Your Account'
        inputFields={signUpInputFields}
        submitText={'Create Account'}
        lottieAnimation={signUpAnim}
        handleFormSubmit={handleSignUp}
        loginSignUpForm={true}
        bottomText={'Already Have An Account?'}
        bottomLinkText={'Login'}
        bottomLink={'/login'}
      />
      <Modal
        title='Loading'
        message='Please Wait Creating Account'
        modalStatus={showModal}
      />
    </section>
  );
};

export default SignUp;
