import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './Routes/Router';
import AuthProvider from './Services/AuthProvider/AuthProvider';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
