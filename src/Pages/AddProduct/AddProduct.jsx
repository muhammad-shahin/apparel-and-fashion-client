import Form from '../../Components/Form/Form';
import addProductAnim from '../../assets/Animation/addProductAnimation.json';
const AddProduct = () => {
  const addProductFields = [
    {
      name: 'name',
      type: 'name',
      placeholder: 'Enter Full Name',
      labelText: 'Enter Full Name',
    },
  ];
  const handleAddProduct = () => {};
  return (
    <section>
      <Form
        title='Create Your Account'
        inputFields={addProductFields}
        submitText={'Create Account'}
        lottieAnimation={addProductAnim}
        handleFormSubmit={handleAddProduct}
        loginSignUpForm={true}
        bottomText={'Already Have An Account?'}
        bottomLinkText={'Login'}
        bottomLink={'/login'}
      />
    </section>
  );
};

export default AddProduct;
