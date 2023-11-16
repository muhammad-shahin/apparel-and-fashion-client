import publicAxios from './publicAxios';

const RegisterUserInDatabase = (userData) => {
  publicAxios
    .post('/users', userData)
    .then((res) => {
      console.log('Rigiter user in Database success :', res.data);
    })
    .catch((error) => {
      console.log('Rigiter user in Database error :', error);
    });
};

export default RegisterUserInDatabase;
