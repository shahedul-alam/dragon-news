import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../layouts/App";


const Router = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <h1>error page</h1>
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
};

export default Router;