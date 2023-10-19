import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import React from "react";

import ProductViewModal from "../components/modals/ProductViewModal";
function Products() {
  // getting products from database

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getdata() {
      let result = await fetch("http://127.0.0.1:8000/api/getproducts");
      result = await result.json();
      setProducts(result);
    }
    getdata();
  }, []);
  console.log(products);

  //  data set

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
          {products.map((product) => (
            <tr>
              <td>
                <div>
                  <a
                    toggle="tooltip"
                    data-placement="top"
                    title="clict to view image"
                    target="_blank"
                    rel="noreferrer"
                    href={"http://127.0.0.1:8000/storage/" + product.profile}>
                    <img
                      style={{ maxHeight: "50px", maxWidth: "auto" }}
                      src={"http://127.0.0.1:8000/storage/" + product.profile}
                      className="rounded"
                      alt="..."
                    />
                  </a>
                </div>
              </td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.description}</td>
              <td>
                <Link to={"/shops"}>ShopRite</Link>
              </td>
              <td>{"MK " + product.price}</td>
              <td>{product.quantity}</td>

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
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
