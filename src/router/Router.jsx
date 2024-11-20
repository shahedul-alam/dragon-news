import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../layouts/App";
import Homepage from "../pages/home/Homepage";
import FullNewsPage from "../pages/news/FullNewsPage";


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
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
          element: <Homepage />,
        },
        {
          path: 'news/:id',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
          element: <FullNewsPage />,
        },
        {
          path: '/about',
          element: <h1>About page</h1>
        },
        {
          path: '/career',
          element: <h1>Career page</h1>
        }
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
};

export default Router;