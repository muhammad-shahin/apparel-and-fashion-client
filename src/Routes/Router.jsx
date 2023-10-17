import Root from '../Layouts/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';

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
      // {
      //   path: '/login',
      //   element: <Login />,
      // },
      // {
      //   path: '/sign-up',
      //   element: <SignUp />,
      // },
      // {
      //   path: '/service-details/:serviceId',
      //   loader: () => fetch('/services.json'),
      //   element: (
      //     <PrivateRoute>
      //       <ServiceDetails />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: '/booked-events',
      //   loader: () => fetch('/services.json'),
      //   element: (
      //     <PrivateRoute>
      //       <BookedEvents />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: '/pricing',
      //   loader: () => fetch('/services.json'),
      //   element: (
      //     <PrivateRoute>
      //       <PricingCard />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
];

export default routes;
