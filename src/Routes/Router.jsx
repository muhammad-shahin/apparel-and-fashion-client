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
import UpdateProduct from '../Pages/Admin/UpdateProduct/UpdateProduct';
import MyCart from '../Pages/MyCart/MyCart';
import Admin from '../Pages/Admin/Admin';
import AdminRoute from './AdminRoute/AdminRoute';
import AdminRoot from '../Pages/Admin/AdminRoot';
import AllProducts from '../Pages/Admin/AllProducts/AllProducts';
import Checkout from '../Pages/Checkout/Checkout';

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
        path: '/brand/:brandName',
        element: (
          <PrivateRoute>
            <BrandProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/brandAdvertisement/${params.brandName}`),
      },
      {
        path: '/addAdvertisement',
        element: (
          <AdminRoute>
            <AddAdvertisement />
          </AdminRoute>
        ),
      },
      {
        path: `/productDetails/:brandName/:productId`,
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: `/updateProduct/:brandName/:productId`,
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/products/${params.brandName}/${params.productId}`
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
      {
        path: `/checkout`,
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: `/admin`,
        element: (
          <AdminRoute>
            <AdminRoot />
          </AdminRoute>
        ),
        children: [
          {
            path: '/admin',
            element: (
              <AdminRoute>
                <Admin />
              </AdminRoute>
            ),
          },
          {
            path: 'addProduct',
            element: (
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            ),
          },
          {
            path: 'allProducts',
            element: (
              <AdminRoute>
                <AllProducts />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
];

export default routes;
