import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import Gallery from "../../../generalComponents/Gallery";

function ShopViewModal(props) {
  const [modalShow, setModalShow] = useState(1);

  function updateTogle(id) {
    setModalShow(id);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body
        style={{
          background: "linear-gradient(90deg,white,azure)",
        }}>
        <div className="row " style={{ height: "80%", marginTop: "-20px" }}>
          <div className="col-md-6">
            <Button
              onClick={props.onHide}
              className="btn-close btn-danger "></Button>
            <a
              toggle="tooltip"
              data-placement="top"
              title="clict to view image"
              target="_blank"
              rel="noreferrer"
              href={"images/prod/sh4.jpg"}>
              {" "}
              <img
                src="images/Chipiku.jpg"
                alt="..."
                style={{ width: "100%", height: "auto" }}
              />
            </a>

            <div className="d-flex  text-secondary px-2 pt-1">
              <Link to={"/products"}>
                <Button variant="outline-success " className="my-2 btn-sm">
                  View Chipiku products
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 pt-4 ">
            <h4 className="text-danger">Chipiku Stores</h4>
            <ul class="nav nav-tabs mb-2 " id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class={modalShow === 1 ? "nav-link active" : "nav-link "}
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
              <li class="nav-item">
                <a
                  class={modalShow === 2 ? " nav-link active" : " nav-link "}
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
              <li class="nav-item">
                <a
                  class={modalShow === 3 ? " nav-link active" : " nav-link "}
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
              <li class="nav-item">
                <a
                  class={modalShow === 4 ? " nav-link active" : " nav-link "}
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
              {props.desc}
            </div>
            {/* desc end */}
            {/* the location */}
            <div
              style={{ height: "47vh", width: "100%" }}
              className={modalShow === 3 ? "d-block" : "d-none"}>
              <img
                src="images/prod/map2.jpg"
                alt="..."
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            {/* location  */}
            {/* the gallery */}

            <div className={modalShow === 4 ? "d-block" : "d-none"}>
              <Gallery
                image1={props.im1}
                image2={props.im2}
                image3={props.im3}
              />
            </div>

            {/* end of gallery */}

            {/* shop detail start */}

            <div className={modalShow === 2 ? "d-block" : "d-none"}>
              <h6>
                location: <span className="text-success">{props.branch}</span>
              </h6>
              <h6 className="mt-2">
                Openning hours:{" "}
                <span className="text-success">
                  {props.opnH + "am to" + props.cloH + "pm"}
                </span>
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
                      <Link>bis14@poly.ac.mw</Link>
                    </span>
                  </span>
                  <br />
                  <span>
                    <b>Phone: </b>
                    <span className="text-success">0882751460</span>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ShopViewModal;
