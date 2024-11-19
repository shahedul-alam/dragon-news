import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../layouts/App";
import Homepage from "../pages/home/Homepage";


const Router = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <h1>error page</h1>,
      children: [
        {
          path: '',
          element: <Navigate to='category/01' />,
        },
        {
          path: 'category/:id',
          element: <Homepage />,
        },
        {
          path: '/about',
          element: <h1>about page</h1>
        }
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
};

export default Router;