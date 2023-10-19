import { Table } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import EditProduct from "./modals/EditProductModle";
import ConfirmDelete from "./modals/ConfirmDeleteModle";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

function Product() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getdata() {
      let result = await fetch(
        "http://127.0.0.1:8000/api/getproducts/" + user.id
      );
      result = await result.json();
      setProducts(result);
    }
    getdata();
  }, []);

 

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowDel, setModalShowDel] = React.useState(false);
  return (
    <div className="container fluid " style={{ height: "100%" }}>
      <div className="row  text-primary d-none">
        <p>
          <em>Search results for cooking oil</em>
        </p>
      </div>
      <Table striped bordered hover variant="">
        <thead>
          <tr>
            <th className=" text-success">Image</th>
            <th className="text-success">Name</th>
            <th className="text-success">Brand</th>
            <th className="text-success">Description</th>
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

              <td>{"MK " + product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <div className="d-flex ">
                  <Button
                    variant="outline-primary me-3"
                    className="my-2 btn-sm"
                    onClick={() => setModalShow(true)}>
                    <span className="fa fa-pen"></span>
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="my-2 btn-sm"
                    onClick={() => setModalShowDel(true)}>
                    <span className="fa fa-trash"></span>
                  </Button>
                </div>
                {/* a call to edit product moodle */}
                <EditProduct
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <ConfirmDelete
                  show={modalShowDel}
                  onHide={() => setModalShowDel(false)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Product;
