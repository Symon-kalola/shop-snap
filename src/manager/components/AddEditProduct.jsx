import { Button } from "react-bootstrap";
import { useState } from "react";

function AddEditProduct() {
  const [name, setName] = useState();
  //const [shop, setShop] = useState();

  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  let user = JSON.parse(localStorage.getItem("user-info"));
  const userId = user.id;

  const [brand, setBrand] = useState();
  // const [setCoordY, coordY] = useState();
  // const [setCoordX, coordX] = useState();
  // const [setCloseHrs, closeHrs] = useState();
  const [description, setDescription] = useState();
  // const [setOpenHrs, openHrs] = useState();
  const [profile, setProfile] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  async function addProduct() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("profile", profile);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("userId", userId);
    formData.append("description", description);
    let results = await fetch("http://127.0.0.1:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });

    if (results.statusText === "OK") {
      alert("Product added successfully");
    } else {
      alert("Failled to add product");
    }
  }

  return (
    <>
      <div className="card w-md-50 card-md text-start">
        <div className="card-body">
          <div className="row">
            {/* the left side */}
            <div className="">
              <div className="d-flex">
                <label className="form-label mt-2 ">Name</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="name"
                  aria-describedby="emailHelp"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 ">Brand</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="brand"
                  aria-describedby="emailHelp"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 ">Price</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="brand"
                  aria-describedby="emailHelp"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 ">Quantity</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="brand"
                  aria-describedby="emailHelp"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {/* <div className=" d-flex mb-2 ">
                <label 
                 className="form-label ">
                  Colors
                </label>
                <div className="ms-2 d-flex ">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" ">
                      Black
                    </label>
                  </div>
                  <div className="form-check ms-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">
                      Red
                    </label>
                  </div>
                  <div className="form-check ms-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" >
                      Green
                    </label>
                  </div>

                  <div className="form-check ms-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" >
                      Blue
                    </label>
                  </div>
                </div>
              </div> */}
              {/* profile card starts */}
              <div
                className="card border-primary d-none bg-body-secondary mb-3 overflow-hidden"
                style={{ maxWidth: "18rem", height: "200px" }}>
                <div className="d-flex d-none justify-content-center">
                  <img
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    src={profile}
                    className="rounded"
                    alt="Profile "
                  />
                </div>
              </div>
              <input
                type="file"
                className="form-control  ms-2 mt-2 mb-2 "
                id="img"
                aria-describedby="emailHelp"
                onChange={(e) => setProfile(e.target.files[0])}
              />

              <div className="d-flex">
                <label className="form-label mt-2 ">Description</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* profile card ends */}
            </div>
            {/* the right side r */}
            <div className="">
              <h6>Gallery</h6>
              <input
                type="file"
                className="form-control  ms-2 mt-2 mb-2 "
                id="img"
                aria-describedby="emailHelp"
                onChange={(e) => setImage1(e.target.files[0])}
              />
              <input
                type="file"
                className="form-control  ms-2 mt-2 mb-2 "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setImage2(e.target.files[0])}
              />
              <input
                type="file"
                className="form-control ms-2 mt-2 mb-2 "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setImage3(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="card-footer text-muted text-center">
          <Button
            variant="outline-primary"
            className="my-2 "
            onClick={addProduct}>
            Add Product
          </Button>
        </div>
      </div>
    </>
  );
}
export default AddEditProduct;
