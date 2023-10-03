import { useState } from "react";
import AddProduct from "../components/AddProducts";
import Product from "../components/Product";
function Products() {
  const [modalShow, setModalShow] = useState(1);

  function updateTogle(id) {
    setModalShow(id);
  }
  return (
    <>
      <ul className="nav nav-tabs  " id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className={modalShow === 1 ? "nav-link active" : "nav-link "}
            id="now-adverts-tab"
            data-toggle="tab"
            href="#desc"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => updateTogle(1)}>
            Products{" "}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={modalShow === 2 ? " nav-link active" : " nav-link "}
            id="pending-adverts-tab"
            data-toggle="tab"
            href="#detail"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => updateTogle(2)}>
            Add Products
          </a>
        </li>
      </ul>
      <div className={modalShow === 1 ? "d-block" : "d-none"}>
        <Product />
      </div>
      <div className={modalShow === 2 ? "d-block" : "d-none"}>
        <AddProduct />
      </div>
    </>
  );
}
export default Products;
