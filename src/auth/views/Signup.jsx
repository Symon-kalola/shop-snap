import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Role from "../RoleValidation";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role] = useState("shop");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  // this redirects the user to the homepage when they are auready logged in
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate(Role());
    }
  });
  //  end of redirection
  // function which is called when submitting a form

  async function Submit() {
    let userDetails = { name, email, role, pass };

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
        Accept: "apllication/json",
      },
    });
    result = await result.json();
    // storing user information which will be sent to redirected pages
    localStorage.setItem("user-info", JSON.stringify(result));

    if (result.role === "shop") {
      navigate("/shop");
    } else {
      navigate("/");
    }
  }

  // end of fuction for submitting the form
  return (
    <div
      style={{ height: "100vh" }}
      className=" bg-secondary  d-flex align-items-md-center  justify-content-center ">
      <Card
        style={{ width: "28rem", height: "95%", marginTop: "10px" }}
        className=" d-flex  justify-content-center">
        <Card.Body>
          <Card.Title className="text-warning border-bottom border-success d-flex justify-content-between ">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h5 className="text-warning">
                <span className="text-success">Shop-</span>Snap
              </h5>
            </Link>
            <h6 className="mx-2 text-sm" style={{ textSize: "10px" }}>
              Login
            </h6>
          </Card.Title>

          <Form>
            <Form.Group className="mb-2 mt-1 py-2">
              <Form.Label className="text-sm">Name:</Form.Label>
              <Form.Control
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="enter name"
              />
            </Form.Group>
            {/* <Form.Group className="mb-2">
              <Form.Label>Role:</Form.Label>

               <select
                onChange={(e) => setRole(e.target.value)}
                name="role"
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                defaultValue={"shop"}>
                <option value="shop">Shop</option>
                <option value="customer">Customer</option>
              </select> 
            </Form.Group> */}
            <Form.Group className="mb-2">
              <Form.Label>Email:</Form.Label>

              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                value={email}
                placeholder="enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                id="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                placeholder="enter password"
              />
            </Form.Group>
            <div className="checkbox pt-2 ">
              <label>
                <input className="text-danger" type={"checkbox"}></input>{" "}
                Remember me?
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-center ">
              <Button
                style={{ width: "100%" }}
                variant="secondary"
                size="sm"
                onClick={Submit}
                className="bg-success  mt-2">
                Register
              </Button>
            </div>
          </Form>

          <div
            className="d-flex align-items-center justify-content-center "
            style={{ fontSize: "14px" }}>
            <span className="pt-2">
              {"Auready have an account? "}
              <Card.Link href="/login">Login</Card.Link>
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
