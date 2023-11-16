import Swal from 'sweetalert2';
import publicAxios from './publicAxios';

const CreateToken = (id) => {
  publicAxios
    .post('/jwt', id)
    .then((res) => {
      console.log(res.data);
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
};

export default CreateToken;
