import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Form = ({
  title,
  inputFields,
  submitText,
  lottieAnimation,
  handleSignUp,
  loginSignUpForm,
  bottomText,
  bottomLinkText,
  bottomLink,
}) => {
  console.log(inputFields);
  return (
    <div
      className=' bg-blue-300 backdrop-blur-[50px] bg-opacity-[0.49] font-medium text-[18px] text- uppercase w-[100%] min-h-[90vh] flex justify-center items-center px-[5%] '
      style={{ fontFamily: 'Quicksand' }}
    >
      <div className=' container mx-auto w-fit grid lg:grid-cols-2 grid-cols-1 shadow-sm shadow-black'>
        {/* left side content */}
        <div className='w-full lg: px-8 lg:px-28 py-10 bg-white rounded-l'>
          <h1 className='lg:text-[32px] text-[24px] font-medium uppercase lg:mb-10 mb-3'>
            {title}
          </h1>
          <form
            className='flex flex-col justify-center items-start gap-4 lg:gap-10'
            onSubmit={handleSignUp}
          >
            {inputFields.map((fields, index) => (
              <Input
                key={index}
                name={fields.name}
                type={fields.type}
                placeholder={fields.placeholder}
                onChange={fields.onChange}
                errorMessage={fields.errorMessage}
                labelText={fields.labelText}
              />
            ))}

            <input
              className='px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.69] font-medium text-[18px] text-white uppercase w-full h-full cursor-pointer rounded hover:bg-transparent border-2 border-transparent hover:text-blue-500 hover:border-blue-500 duration-500'
              type='submit'
              value={submitText}
            />
          </form>
          {loginSignUpForm && (
            <div>
              <p className='text-[18px] font-medium text-center mt-4'>
                {bottomText}{' '}
                <Link
                  to={bottomLink}
                  className='text-[#F9A51A] underline'
                >
                  {bottomLinkText}
                </Link>
              </p>
              {/* horizontal row */}
              <div className='w-full flex justify-center items-center gap-3 my-4'>
                <hr className='w-full h-[2px] bg-gray-300' />
                <span className=' font-medium'>Or</span>
                <hr className='w-full h-[2px] bg-gray-300' />
              </div>
              {/* sign in with google section */}
              <GoogleSignIn />
            </div>
          )}
        </div>

        {/* right side content */}
        <div className='max-w-[650px]  px-14 py-10 bg-blue-400 rounded-r hidden lg:flex justify-center items-center'>
          <Lottie animationData={lottieAnimation} />
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  inputFields: PropTypes.array.isRequired,
  lottieAnimation: PropTypes.any,
  submitText: PropTypes.string,
  handleSignUp: PropTypes.func,
  loginSignUpForm: PropTypes.bool.isRequired,
  bottomText: PropTypes.string,
  bottomLinkText: PropTypes.string,
  bottomLink: PropTypes.string,
};

export default Form;
