import { useState } from 'react';
import Form from '../../Components/Form/Form';
import addProductAnim from '../../assets/Animation/addProductAnimation.json';
import Modal from '../../Services/Utility/Modal';
import Swal from 'sweetalert2';
import useAxios from '../../AuthProvider/useAxios';
import PageTitle from '../../Components/PageTitle/PageTitle';
const AddAdvertisement = () => {
  PageTitle('Add New Advertisement - Fashion & Apparel');
  const secureAxios = useAxios();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    advertisementImages: '',
    brandName: '',
    addAdvertisement: '',
    productName: '',
    startingPrice: '',
    brandLogo: '',
  });
  // handle Field Value Changes
  const handleFieldValueChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => {
      if (fieldName === 'brandName') {
        return {
          ...prevData,
          [fieldName]: value,
        };
      } else {
        return {
          ...prevData,
          [fieldName]: value,
        };
      }
    });
  };

  //   advertisement fields
  const [addProductFields, setAddProductFields] = useState([
    {
      name: 'title',
      type: 'text',
      placeholder: 'Advertisement Title',
      labelText: 'Enter Advertisement Title',
      onChange: handleFieldValueChange,
    },
    {
      name: 'advertisementImage',
      type: 'text',
      placeholder: 'Image Link',
      labelText: 'Advertisement Image Link',
      onChange: handleFieldValueChange,
    },
    {
      name: 'brandName',
      type: 'text',
      placeholder: 'Enter Brand Name',
      labelText: 'Brand Name',
      onChange: handleFieldValueChange,
    },
    {
      name: 'adsDescription',
      type: 'text',
      placeholder: 'Description',
      labelText: 'Add Advertisement Description',
      onChange: handleFieldValueChange,
    },
    {
      name: 'productName',
      type: 'text',
      placeholder: 'Product Name',
      labelText: 'Enter  Advertised Product Name',
      onChange: handleFieldValueChange,
    },
    {
      name: 'startingPrice',
      type: 'text',
      placeholder: 'Starting Price',
      labelText: 'Enter Starting Price for Advertised Product',
      onChange: handleFieldValueChange,
    },
    {
      name: 'brandLogo',
      type: 'text',
      placeholder: 'Add Brand Logo Image ',
      labelText: 'Brand Logo',
      onChange: handleFieldValueChange,
    },
  ]);

  // add product button click
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBrandAdvertisement = { ...formData };
    console.log(newBrandAdvertisement);
    setShowModal(true);
    secureAxios
      .post('/brandAdvertisement', newBrandAdvertisement)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Advertisement Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setShowModal(false);
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed To Add New Advertisement',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <div className='relative'>
        <Form
          title='Add brand Advertisement slider content'
          inputFields={addProductFields}
          submitText={'Add Advertisement'}
          lottieAnimation={addProductAnim}
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

export default AddAdvertisement;
