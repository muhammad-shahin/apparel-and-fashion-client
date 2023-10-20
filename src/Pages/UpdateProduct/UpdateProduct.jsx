import { useState } from 'react';
import Form from '../../Components/Form/Form';
import updateProductAnim from '../../assets/Animation/updateAnimation.json';
import Modal from '../../Services/Utility/Modal';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
const UpdateProduct = () => {
  const { brandName, productId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const previousData = useLoaderData();
  const [buttonModalStatus, setButtonModalStatus] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    productImages: [],
    brandName: '',
    productType: '',
    productPrice: '',
    productRating: '',
  });
  // handle Field Value Changes
  const handleFieldValueChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  // handle Field Value Changes onBlur
  const handleFieldBlur = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    if (value.trim() !== '') {
      // Check if the value is not empty or only contains whitespace
      setFormData((prevData) => {
        if (Array.isArray(prevData[fieldName])) {
          return {
            ...prevData,
            [fieldName]: [...prevData[fieldName], value],
          };
        }
        return prevData;
      });
    }
  };

  const [addProductFields, setAddProductFields] = useState([
    {
      name: 'productName',
      type: 'text',
      placeholder: 'Product Name',
      labelText: 'Enter Product Name',
      onChange: handleFieldValueChange,
    },
    {
      name: 'productImages',
      type: 'text',
      placeholder: 'Image Link',
      labelText: 'Product Image Link',
      onBlur: handleFieldBlur,
    },
    {
      name: 'brandName',
      type: 'text',
      placeholder: 'Enter Brand Name',
      labelText: 'Brand Name',
      onChange: handleFieldValueChange,
    },
    {
      name: 'productType',
      type: 'text',
      placeholder: 'Enter Product Type',
      labelText: 'Product Type',
      onChange: handleFieldValueChange,
    },
    {
      name: 'productPrice',
      type: 'text',
      placeholder: 'Enter Product Price',
      labelText: 'Product Price',
      onChange: handleFieldValueChange,
    },
    {
      name: 'productRating',
      type: 'text',
      placeholder: 'Enter Product Rating',
      labelText: 'Product Rating',
      onChange: handleFieldValueChange,
    },
  ]);

  // update product button click
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = { ...formData };
    console.log(updatedProduct);
    setShowModal(true);
    fetch(`http://localhost:5000/products/${brandName}/${productId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Updated Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setShowModal(false);
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed To Update Product',
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
        }
      });
  };
  return (
    <section>
      <div className='relative'>
        <Form
          title={`Update product`}
          inputFields={addProductFields}
          submitText={'Submit'}
          lottieAnimation={updateProductAnim}
          handleFormSubmit={handleAddProduct}
          loginSignUpForm={false}
        />
        <div className='absolute bottom-0'></div>
      </div>
      {/* additional info */}
      <Modal
        title='Adding Product'
        message='Please Wait Uploading Product In Database'
        modalStatus={showModal}
      />
    </section>
  );
};

export default UpdateProduct;
