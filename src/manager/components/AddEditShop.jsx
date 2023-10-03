import { Button } from "react-bootstrap";
import { useState } from "react";

function AddEditShop() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const [name, setName] = useState();
  const userId = user.id;
  const [branch, setBranch] = useState();
  const [coordY, setCoordY] = useState(2);
  const [coordX, setCoordX] = useState();
  const [description, setDescription] = useState();
  const [openHrs, setOpenHrs] = useState();
  const [closeHrs, setCloseHrs] = useState();
  const [profile, setProfile] = useState();
  const [image2, setImage2] = useState();
  const [image1, setImage1] = useState();
  const [image3, setImage3] = useState();

  async function addShop() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("branch", branch);
    formData.append("coordX", coordX);
    formData.append("coordY", coordY);
    formData.append("closeHrs", closeHrs);
    formData.append("profile", profile);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("openHrs", openHrs);
    formData.append("description", description);
    formData.append("userId", userId);

    let results = await fetch("http://127.0.0.1:8000/api/addshop", {
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
                <label className="form-label mt-2 ">Branch</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="blanch"
                  aria-describedby="emailHelp"
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 ">OHours</label>
                <input
                  type="text"
                  placeholder=" Oppening hours"
                  className="form-control ms-2 mb-2 "
                  id="open"
                  aria-describedby="emailHelp"
                  onChange={(e) => setOpenHrs(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 ">CHours</label>
                <input
                  type="text"
                  placeholder="closing hours"
                  className="form-control ms-2 mb-2 "
                  id="close"
                  aria-describedby="emailHelp"
                  onChange={(e) => setCloseHrs(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 ">CordinatesX</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="cordx"
                  aria-describedby="emailHelp"
                  onChange={(e) => setCoordX(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <label className="form-label mt-2 ">CordinatesY</label>
                <input
                  type="text"
                  className="form-control ms-2 mb-2 "
                  id="cordx"
                  aria-describedby="emailHelp"
                  onChange={(e) => setCoordY(e.target.value)}
                />
              </div>

              {/* profile card starts */}
              <h6>Profile image</h6>
              <div
                className="card d-none border-primary bg-body-secondary mb-3 overflow-hidden"
                style={{ maxWidth: "18rem", height: "200px" }}>
                <div className="d-flex  justify-content-center">
                  <img
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    src="/images/prod/spag.jpg"
                    className="rounded"
                    alt="Profile "
                  />
                </div>
              </div>
              <input
                type="file"
                className="form-control ms-2 mt-2 mb-2 "
                id="img"
                placeholder="Profile picture"
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
              <h6>Gallery Images</h6>
              <input
                type="file"
                className="form-control ms-2 mt-2 mb-2 "
                id="img"
                aria-describedby="emailHelp"
                onChange={(e) => setImage1(e.target.files[0])}
              />
              <input
                type="file"
                className="form-control ms-2 mt-2 mb-2 "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setImage2(e.target.files[0])}
              />{" "}
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
          {" "}
          <Button variant="outline-primary" className="my-2" onClick={addShop}>
            Add Shop
          </Button>
        </div>
      </div>
    </>
  );
}
export default AddEditShop;
