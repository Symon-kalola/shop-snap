import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AOS from "aos";
import { useState } from "react";
import { Link } from "react-router-dom";
import Gallery from "../../generalComponents/Gallery";
import ConfirmDelete from "./modals/ConfirmDeleteModle";
import EditShop from "./modals/ShopEditModle";
import React, { useEffect } from "react";

function Shop() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  let user = JSON.parse(localStorage.getItem("user-info"));
  const [shops, setShops] = useState([]);
  useEffect(() => {
    async function getdata() {
      let result = await fetch("http://127.0.0.1:8000/api/getshops/" + user.id);
      result = await result.json();
      setShops(result);
    }
    getdata();
  }, []);

  const [modalShow, setModalShow] = useState(1);
  const [modalShowDel, setModalShowDel] = React.useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);

  function updateTogle(id) {
    setModalShow(id);
  }

  return (
    <>
      <div className="col-md-7 " data-aos="zoom-in">
        <Modal.Body
          className="shadow"
          style={{
            background: "linear-gradient(90deg,white,azure) ",
            marginTop: "20px",
          }}>
          {shops.map((shop) => (
            <div
              className="card mt-4 shadow-sm"
              style={{ height: "80%", marginTop: "-20px" }}>
              <div className="d-flex justify-content-between">
                {" "}
                <h4 className="text-danger p-2">{shop.name}</h4>
                <div>
                  <div className="d-flex ">
                    <Button
                      variant="outline-primary me-3"
                      className="my-2 btn-sm"
                      onClick={() => setModalEdit(true)}>
                      <span className="fa fa-pen"></span>
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="my-2 btn-sm"
                      onClick={() => setModalShowDel(true)}>
                      <span className="fa fa-trash"></span>
                    </Button>
                  </div>
                  <EditShop
                    show={modalEdit}
                    onHide={() => setModalEdit(false)}
                  />
                  <ConfirmDelete
                    show={modalShowDel}
                    onHide={() => setModalShowDel(false)}
                  />
                </div>
              </div>

              <a
                toggle="tooltip"
                data-placement="top"
                title="clict to view image"
                target="_blank"
                rel="noreferrer"
                href={"http://127.0.0.1:8000/storage/" + shop.profile}>
                {" "}
                <img
                  src={"http://127.0.0.1:8000/storage/" + shop.profile}
                  alt="..."
                  style={{ width: "100%", height: "auto" }}
                />
              </a>

              <ul className="nav nav-tabs mb-2 " id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className={
                      modalShow === 1 ? "nav-link active" : "nav-link "
                    }
                    id="now-adverts-tab"
                    data-toggle="tab"
                    href="#desc"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => updateTogle(1)}>
                    Description{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      modalShow === 2 ? " nav-link active" : " nav-link "
                    }
                    id="pending-adverts-tab"
                    data-toggle="tab"
                    href="#details"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => updateTogle(2)}>
                    Details
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      modalShow === 3 ? " nav-link active" : " nav-link "
                    }
                    id="pending-adverts-tab"
                    data-toggle="tab"
                    href="#location"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => updateTogle(3)}>
                    location
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      modalShow === 4 ? " nav-link active" : " nav-link "
                    }
                    id="pending-adverts-tab"
                    data-toggle="tab"
                    href="#gallery"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => updateTogle(4)}>
                    Gallery
                  </a>
                </li>
              </ul>
              {/* shop detail pen start */}
              <div className={modalShow === 1 ? "d-block" : "d-none"}>
                {shop.description}
              </div>
              {/* desc end */}
              {/* the location */}
              <div
                style={{ height: "47vh", width: "100%" }}
                className={modalShow === 3 ? "d-block" : "d-none"}>
                <img
                  src="/images/prod/map2.jpg"
                  alt="..."
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              {/* location  */}
              {/* the gallery */}

              <div className={modalShow === 4 ? "d-block" : "d-none"}>
                <Gallery
                  image2={shop.image2}
                  image1={shop.image1}
                  image3={shop.image3}
                />
              </div>

              {/* end of gallery */}

              {/* shop detail start */}

              <div className={modalShow === 2 ? "d-block p-2" : "d-none"}>
                <h6>
                  location:{" "}
                  <span className="text-success">
                    {"Blantyre " + shop.branch}
                  </span>
                </h6>
                <h6 className="mt-2">
                  Openning hours:{" "}
                  <span className="text-success">{shop.openHrs}</span>
                </h6>
                <h6 className="mt-2">
                  Closing hours:{" "}
                  <span className="text-success">{shop.closeHrs}</span>
                </h6>
                <div className={modalShow === 2 ? "d-block" : "d-none"}>
                  <h6>
                    Contact Details: <span className="text-success"></span>
                    <br />
                    <span>
                      <b>Phone: </b>
                      <span className="text-success">0882751460</span>
                    </span>
                    <br />
                    <span>
                      <b>Email: </b>
                      <span className="text-success">
                        <Link>{user.email}</Link>
                      </span>
                    </span>
                    <br />
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
      </div>
    </>
  );
}
export default Shop;
