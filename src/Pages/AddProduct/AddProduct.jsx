import { useState } from 'react';
import Form from '../../Components/Form/Form';
import addProductAnim from '../../assets/Animation/addProductAnimation.json';
import Modal from '../../Services/Utility/Modal';
import Swal from 'sweetalert2';
import ButtonModal from '../../Components/ButtonModal/ButtonModal';
const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [buttonModalStatus, setButtonModalStatus] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    productImages: [],
    brandName: '',
    productType: '',
    productPrice: '',
    productDescription: '',
    productRating: '',
    productColors: [],
    productSize: [],
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
      name: 'productDescription',
      type: 'text',
      placeholder: 'Enter Product Description',
      labelText: 'Product Description',
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

  // this function create new input fields
  const handleAddFieldsBtn = (btnId) => {
    const newField = [...addProductFields];
    if (btnId === 'image') {
      const imageField = {
        name: 'productImage',
        type: 'text',
        placeholder: 'A New Image Link',
        labelText: 'Image Link',
        onBlur: handleFieldBlur,
      };
      newField.push(imageField);
      setAddProductFields(newField);
      setButtonModalStatus(false);
    } else if (btnId === 'size') {
      const sizeField = {
        name: 'productSize',
        type: 'text',
        placeholder: 'Add Product Size eg. "S"',
        labelText: 'Product Size',
        onBlur: handleFieldBlur,
      };
      newField.push(sizeField);
      setAddProductFields(newField);
      setButtonModalStatus(false);
    } else if (btnId === 'color') {
      const colorField = {
        name: 'productColors',
        type: 'text',
        placeholder: 'Add Product Color',
        labelText: 'Product Color',
        onBlur: handleFieldBlur,
      };
      newField.push(colorField);
      setAddProductFields(newField);
      setButtonModalStatus(false);
    }
  };

  const handleAdditionInfo = () => {
    setButtonModalStatus(true);
  };

  // add product button click
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newProduct = { ...formData };
    console.log(newProduct);
    setShowModal(true);
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Product Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setShowModal(false);
        } else {
          Swal.fire({
            position: 'error',
            icon: 'success',
            title: 'Failed To Add New Product',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <section>
      <div className='relative'>
        <Form
          title='add new product'
          inputFields={addProductFields}
          submitText={'Add Product'}
          lottieAnimation={addProductAnim}
          handleFormSubmit={handleAddProduct}
          loginSignUpForm={false}
          extraButtonText={'Add More INFO'}
          extraButtonOnClick={handleAdditionInfo}
        />
        <div className='absolute bottom-0'>
          <button
            className='px-5 py-2 bg-[#5500ff] backdrop-blur-[25px] bg-opacity-[0.69] font-medium text-[18px] text-white uppercase w-full h-full cursor-pointer rounded hover:bg-transparent border-2 border-transparent hover:text-blue-500 hover:border-blue-500 duration-500'
            onClick={handleAdditionInfo}
          >
            Add More Info
          </button>
        </div>
      </div>
      {/* additional info */}
      <Modal
        title='Adding Product'
        message='Please Wait Uploading Product In Database'
        modalStatus={showModal}
      />
      <ButtonModal
        buttonModalStatus={buttonModalStatus}
        title='Add More Product Information'
        message='By Clicking Any Of This Button A new field will add. Chose A Field You Want To Add. You Can Add Multiple Images, Multiple Colors and Sizes'
        handleAddFieldsBtn={handleAddFieldsBtn}
        setButtonModalStatus={setButtonModalStatus}
      />
    </section>
  );
};

export default AddProduct;
