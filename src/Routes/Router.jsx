import Root from '../Layouts/Root/Root';
import AddProduct from '../Pages/AddProduct/AddProduct';
import BrandDetails from '../Pages/BrandDetails/BrandDetails';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

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
        element: <BrandDetails />,
      },
    ],
  },
];

export default routes;
