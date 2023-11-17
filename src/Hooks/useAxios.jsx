/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { auth } from '../Configs/firebase.config';

const secureAxios = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

const useAxios = (navigate) => {
  useEffect(() => {
    secureAxios.interceptors.request.use(
      (config) => {
        console.log('request Stopped By interceptors');
        const accessToken = JSON.parse(localStorage.getItem('access-token'));
        console.log(accessToken);
        config.headers.authorization = accessToken.token;
        return config;
      },
      (error) => {
        console.log('interceptor request error : ', error);
        return Promise.reject(error);
      }
    );
    secureAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log('Axios interceptors error : ', error);
        console.log(
          'Axios interceptors error status code: ',
          error.request.status
        );
        if (error.request.status === 401 || error.request.status === 403) {
          localStorage.removeItem('access-token');
          localStorage.removeItem('userData');
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Season Expired',
            text: `Please login again. Your season has been expired.`,
            showConfirmButton: false,
            timer: 1500,
          });
          signOut(auth)
            .then(() => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully Logout',
                showConfirmButton: false,
                timer: 2000,
              });
              navigate('/login');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, []);

  return secureAxios;
};

export default useAxios;
