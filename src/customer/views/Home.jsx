import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Badge from "react-bootstrap";

import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Container
        fluid
        style={{
          height: "80vh",
          backgroundImage: 'url("/images/phoneT.jpg")',
          backgroundSize: "100%",

          backgroundRepeat: "no-repeat",
          color: "white",
        }}
        className="bg-primary ">
        <div className="row" style={{ height: "100%" }}>
          <div className="col-md-7 d-flex align-items-center justify-content-center ">
            <div className="p-5" data-aos="zoom-in">
              <h1>Search Products in Retail Shops </h1>
              <h4 style={{ color: "gray" }}>
                Chech available products & pricing before visiting
              </h4>

              <div className=" mt-4">
                <a
                  className="btn btn-lg text-white border border-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#partners_modal">
                  {" "}
                  Contact us{" "}
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 d-none d-md-flex order-1 order-lg-2 hero-img  d-flex 
            align-items-center justify-content-center"
            data-aos="fade-down">
            <img
              src="/images/hero-img.png"
              className="img-fluid animated"
             
              alt=""
            />
          </div>
        </div>
        <div
          className="bg-body-secondary row p-0 "
          style={{ height: "15vh", marginLeft: "-10px" }}>
          <div className="col-lg-3" style={{ height: "50%" }}>
            <div className="card mt-2 shop-card  shadow-sm">
              <img
                src="images/Chipiku.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mt-2 shop-card shadow-sm">
              <img src="images/sho.jpg" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mt-2 shop-card shadow-sm">
              <img src="images/sana.png" className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mt-2 shop-card shadow-sm">
              <img src="images/sana.png" className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
