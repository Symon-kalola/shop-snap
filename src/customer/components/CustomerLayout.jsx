

import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";
const height = {
  height: "100vh",
  color: "green",
};
function CustomerLayout() {
  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <div className="row " style={height}>
          <div className="col-md-2 shadow bg-body-secondary d-none d-md-block customer-body">
            <Aside />
          </div>
          <div className="col-md-10 shadow  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLayout;
