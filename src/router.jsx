import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/views/Login";
import Signup from "./auth/views/Signup";
import Shops from "./customer/views/Shops";
import Home from "./customer/views/Home";
// import Protected from "./auth/protected";
import NotFound from "./customer/components/NotFound";
import CustomerLayout from "./customer/components/CustomerLayout";
import Products from "./customer/views/Products";

// manager layouts
import LayOut from "./manager/views/LayOut";
import ManagerHome from "./manager/views/Home";
import ManagerProducts from "./manager/views/Products";
import ManagersShops from "./manager/views/Shops";
import Notifications from "./manager/views/Notifications";

let user = JSON.parse(localStorage.getItem("user-info"));
console.warn(user);

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
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/" + 50 + "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <ManagerHome />,
      },
      {
        path: "shops",
        element: <ManagersShops />,
      },
      {
        path: "products",
        element: <ManagerProducts />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);
export default router;
