import { useState } from "react";
import React from "react";

import AddEditShop from "../components/AddEditShop";
import Shop from "../components/Shop";
function Shops() {
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
            href="#shops"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => updateTogle(1)}>
            Shops{" "}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={modalShow === 2 ? " nav-link active" : " nav-link "}
            id="pending-adverts-tab"
            data-toggle="tab"
            href="#addShop"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => updateTogle(2)}>
            Add Shops
          </a>
        </li>
      </ul>
      <div className={modalShow === 1 ? "d-block" : "d-none"}>
        <Shop />
      </div>
      <div className={modalShow === 2 ? "d-block" : "d-none"}>
        <AddEditShop />
      </div>
    </>
  );
}
export default Shops;
