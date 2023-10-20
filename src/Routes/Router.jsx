import BrandProducts from '../Components/BrandProducts/BrandProducts';
import Root from '../Layouts/Root/Root';
import AddProduct from '../Pages/AddProduct/AddProduct';
import BrandDetails from '../Pages/AddAdvertisement/AddAdvertisement';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';

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
        element: <AddProduct />,
      },
      {
        path: '/brand/:brandName',
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brandAdvertisement/${params.brandName}`),
      },
      {
        path: '/addAdvertisement',
        element: <BrandDetails />,
        loader: () => fetch('/'),
      },
      {
        path: `/productDetails/:brandName/:productId`,
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/products/${params.brandName}/${params.productId}`
          ),
      },
    ],
  },
];

export default routes;
