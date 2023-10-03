import { Outlet } from "react-router-dom";
import ManNav from "../components/Navi";

const height = {
  height: "100vh",
};
function LayOut() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  return (
    <div>
      <div className="container-fluid  " style={{ marginTop: "2px" }}>
        <div className="row " style={height}>
          <div className="p-0 col-lg-2 col-md-3 shadow-lg bg-secondary d-none d-md-block ">
            {/* start her */}

            <div className="dash-text h6 text-light mb-2  border-bottom list-group">
              <br />
              <br />
              <a
                href={"/" + user.id + "/"}
                className="text-light boder-0 p-0 h5 list-group-item bg-secondary border-0">
                <span className="fa fa-tachometer-alt m-2 mb-2 px-2  "></span>
                Dashboard
              </a>
            </div>
            <div className="list-group  ">
              <a
                href={"/" + user.id + "/products"}
                className="list-group-item list-group-item-action bg-secondary text-white-50  border-0">
                <span className="fa fa-shopping-cart px-3 "></span>Inventory
              </a>
              <a
                href={"/" + user.id + "/shops"}
                className="list-group-item list-group-item-action  text-white-50 bg-secondary border-0  ">
                <span className="fa fa-home px-3 "></span>Shops
              </a>
              <a
                href={"/" + user.id + "/notifications"}
                className="list-group-item list-group-item-action bg-secondary text-white-50 border-0">
                <span className="fa fa-bell px-3 "></span>Notifications
              </a>
            </div>

            {/* end here */}
          </div>
          <div className="col-md-10 shadow  " style={{ paddingLeft: "-20px" }}>
            <ManNav />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayOut;
