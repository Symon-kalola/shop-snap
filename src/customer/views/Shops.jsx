import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import React from "react";
import ShopViewModal from "../components/modals/ShopViewModal";

function Shops() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid>
      <Row data-aos="zoom-in">
        <div className="col-md-4 mt-1">
          <Link
            toggle="tooltip"
            data-placement="top"
            title="Click to view shop details"
            onClick={() => setModalShow(true)}
            className="text-decoration-none">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "100%", maxHeight: "" }}>
              <div className="card-header">
                <img
                  src="images/Chipiku.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title d-flex justify-content-center text-success">
                  Chipiku Stores
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mt-1">
          <Link
            onClick={() => setModalShow(true)}
            className="text-decoration-none">
            <div
              className="card border-danger mb-3"
              style={{ maxWidth: "100%", maxHeight: "" }}>
              <div className="card-header">
                <img src="images/sho.jpg" className="card-img-top" alt="..." />
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title d-flex justify-content-center text-danger">
                  ShopRite
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
          <ShopViewModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>

        <div className="col-md-4 mt-1">
          <Link
            onClick={() => setModalShow(true)}
            className="text-decoration-none">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "100%", maxHeight: "" }}>
              <div className="card-header">
                <img src="images/sana.png" className="card-img-top" alt="..." />
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title d-flex justify-content-center text-success">
                  Sana Cash & Carry
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Row>
      <Row data-aos="fade-up">
        <div className="col-md-4 mt-1">
          <Link
            onClick={() => setModalShow(true)}
            className="text-decoration-none">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "100%", maxHeight: "" }}>
              <div className="card-header">
                <img
                  src="images/Chipiku.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title d-flex justify-content-center text-success">
                  Chipiku Stores
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mt-1">
          <Link
            onClick={() => setModalShow(true)}
            className="text-decoration-none">
            <div
              className="card border-danger mb-3"
              style={{ maxWidth: "100%", maxHeight: "" }}>
              <div className="card-header">
                <img src="images/sho.jpg" className="card-img-top" alt="..." />
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title d-flex justify-content-center text-danger">
                  ShopRite
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mt-1">
          <Link
            onClick={() => setModalShow(true)}
            className="text-decoration-none">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "100%", maxHeight: "" }}>
              <div className="card-header">
                <img src="images/sana.png" className="card-img-top" alt="..." />
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title d-flex justify-content-center text-success">
                  Sana Cash & Carry
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Row>
    </Container>
  );
}
export default Shops;
