import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function ProductViewModal(props) {
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
                src="images/prod/sh4.jpg"
                alt="..."
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <div className="d-flex  text-secondary px-2 pt-1">
              <h6 className="me-4">Colors</h6>
              <p className="fa fa-circle  mt-1 mx-2"> </p>
              <p className="fa fa-circle text-danger mt-1 mx-2"> </p>
              <p className="fa fa-circle text-black mt-1 mx-2"> </p>
              <p className="fa fa-circle text-warning mt-1 mx-2"> </p>
            </div>
          </div>
          <div className="col-md-6  ">
            <div className="d-flex justify-content-between">
              <h5 className="badge bg-white text-success">new</h5>
            </div>
            <div>
              <h1>ADIDAS</h1>
              <h5 className="text-secondary">SNEAKER SHOE</h5>
            </div>
            <div className="d-flex py-3">
              <div className="me-5">
                <h6>Price</h6>
                <h3 className="text-success">MK20,000</h3>
              </div>
              <div className="ms-2">
                <h6>Quantity</h6>
                <h3 className="text-success ms-4">7</h3>
              </div>
            </div>
            <ul class="nav nav-tabs  " id="myTab" role="tablist">
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
                  href="#detail"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={() => updateTogle(2)}>
                  Details
                </a>
              </li>
              <div>
                <button
                  toggle="tooltip"
                  data-placement="top"
                  title="like"
                  className=" btn  shadow-0 text-primary"
                  style={{ fontSize: "12px" }}
                  value="">
                  <i className=" fa fa-thumbs-up"></i>2
                </button>
                <button
                  toggle="tooltip"
                  data-placement="top"
                  title="dislike"
                  className="btn  shadow-0 text-primary"
                  style={{ fontSize: "12px" }}
                  value="">
                  <i className=" fa fa-thumbs-down"></i>4
                </button>
              </div>
            </ul>

            <div className={modalShow === 1 ? "d-block" : "d-none"}>
              Here we will have a description of the product it will contain a
              specified number of words which will be used to describe the
              product which is displayed, ensure that thwe word do dot outflow
              the available space so please controll the input
            </div>
            <div className={modalShow === 2 ? "d-block" : "d-none"}>
              <h6>
                Size: <span className="text-success">sm lg md xl</span>
              </h6>
              <h6>
                Shop: <span className="text-success">Chipiku</span>
              </h6>
              <h6>
                Posted on: <span className="text-success">date</span>
              </h6>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ProductViewModal;
