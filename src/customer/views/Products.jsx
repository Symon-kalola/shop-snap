import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

import ProductViewModal from "../components/modals/ProductViewModal";
function Products() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container fluid " style={{ height: "100%" }}>
      <div className="row  text-primary d-none">
        <p>
          <em>Search results for cooking oil</em>
        </p>
      </div>
      <Table striped bordered hover variant="" d-flex>
        <thead>
          <tr>
            <th className="d-flex  justify-content-center text-success">
              Image
            </th>
            <th className="text-success">Name</th>
            <th className="text-success">Brand</th>
            <th className="text-success">Description</th>
            <th className="text-success">Shop</th>
            <th className="text-success">Price</th>
            <th className="text-success">Stock</th>

            <th className="text-success ">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex  justify-content-center">
                <img
                  style={{ maxHeight: "50px", maxWidth: "auto" }}
                  src="images/prod/sh.jpg"
                  className="rounded"
                  alt="..."
                />
              </div>
            </td>
            <td>Sneaker</td>
            <td>Adidas</td>
            <td>Sports shoe for all activities</td>
            <td>
              <Link to={"/shops"}>ShopRite</Link>
            </td>
            <td>MK1000</td>
            <td>100</td>

            <td>
              <Button
                variant="outline-primary"
                className="my-2 btn-sm"
                onClick={() => setModalShow(true)}>
                view
              </Button>
              <ProductViewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex  justify-content-center">
                <img
                  style={{ maxHeight: "50px", maxWidth: "auto" }}
                  src="images/prod/sh2.jpg"
                  className="rounded"
                  alt="..."
                />
              </div>
            </td>
            <td>Sneaker</td>
            <td>Adidas</td>
            <td>Sports shoe for all activities</td>
            <td>
              <Link>ShopRite</Link>
            </td>
            <td>MK1000</td>
            <td>100</td>
            <td>
              <Button
                variant="outline-primary"
                className="my-2 btn-sm"
                onClick={() => setModalShow(true)}>
                view
              </Button>
              <ProductViewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </td>
          </tr>{" "}
          <tr>
            <td>
              <div className="d-flex  justify-content-center">
                <img
                  style={{ maxHeight: "50px", maxWidth: "auto" }}
                  src="images/prod/p.jpg"
                  className="rounded"
                  alt="..."
                />
              </div>
            </td>
            <td>Sneaker</td>
            <td>Adidas</td>
            <td>Sports shoe for all activities</td>
            <td>
              <Link>ShopRite</Link>
            </td>
            <td>MK1000</td>
            <td>100</td>

            <td>
              <Button
                variant="outline-primary"
                className="my-2 btn-sm"
                onClick={() => setModalShow(true)}>
                view
              </Button>
              <ProductViewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </td>
          </tr>{" "}
          <tr>
            <td>
              <div className="d-flex  justify-content-center">
                <img
                  style={{ maxHeight: "50px", maxWidth: "auto" }}
                  src="images/prod/su.jpg"
                  className="rounded"
                  alt="..."
                />
              </div>
            </td>
            <td>Sneaker</td>
            <td>Adidas</td>
            <td>Sports shoe for all activities</td>
            <td>
              <Link>ShopRite</Link>
            </td>
            <td>MK1000</td>
            <td>100</td>

            <td>
              <Button
                variant="outline-primary"
                className="my-2 btn-sm"
                onClick={() => setModalShow(true)}>
                view
              </Button>
              <ProductViewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
