import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/views/Login";
import Signup from "./auth/views/Signup";
import Shops from "./customer/views/Shops";
import Products from "./customer/views/Products";
// import Protected from "./auth/protected";
import NotFound from "./customer/components/NotFound";
import CustomerLayout from "./customer/components/CustomerLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      {
        path: "/shops",
        element: <Shops />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
export default router;
