// import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Aside() {
  const [searchData, changeData] = useState({
    shopName: "all",
    productName: "",
    key: "Product Name",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    changeData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // functions for changing the left below text for shop and products when searching

  return (
    <div className="">
      <h5 className="pt-3">Search Parnel </h5>
      <div>
        <Form className=" ">
          <div>
            Search with:
            <span>
              <select
                onInput={handleChange}
                name="key"
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                defaultValue={"Product-Name"}>
                <option value="Product Name">Product-Name</option>
                <option value="Brand">Brand</option>
                <option value="Code">Code</option>
              </select>
            </span>
          </div>
          <p>
            Shop:
            <span>
              <select
                onInput={handleChange}
                name="shopName"
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                defaultValue={"all"}>
                <option value="All">All</option>
                <option value="Chipiku">Chipiku</option>
                <option value="Sana">Sana</option>
                <option value="Ekhaya">Ekhaya</option>
              </select>
            </span>
          </p>
          <Form.Control
            onInput={handleChange}
            name="productName"
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary" className="my-2 btn-sm">
            Search
          </Button>
        </Form>
      </div>

      <div className="pt-4">
        <h5 className="badge bg-primary txt-white">Your Search information</h5>
        <p>
          You are currently searching using
          <b> {searchData.key} </b> in
          <b> {searchData.shopName} </b> Shops
        </p>
      </div>
    </div>
  );
}

export default Aside;
