import BrandProducts from '../Components/BrandProducts/BrandProducts';
import Root from '../Layouts/Root/Root';
import AddProduct from '../Pages/AddProduct/AddProduct';
import AddAdvertisement from '../Pages/AddAdvertisement/AddAdvertisement';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import MyCart from '../Pages/MyCart/MyCart';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/addProduct',
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: '/brand/:brandName',
        element: (
          <PrivateRoute>
            <BrandProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brandAdvertisement/${params.brandName}`),
      },
      {
        path: '/addAdvertisement',
        element: (
          <PrivateRoute>
            <AddAdvertisement />
          </PrivateRoute>
        ),
      },
      {
        path: `/productDetails/:brandName/:productId`,
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/products/${params.brandName}/${params.productId}`
          ),
      },
      {
        path: `/updateProduct/:brandName/:productId`,
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/products/${params.brandName}/${params.productId}`
          ),
      },
      {
        path: `/myCart`,
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
    ],
  },
];

export default routes;
