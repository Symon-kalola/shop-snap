import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Role from "../RoleValidation";

import Form from "react-bootstrap/Form";
function Login() {
  const [email, setEmail] = useState("");

  var [error, setError] = useState("");

  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  // this redirects the user to the homepage when they are auready logged in
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate(Role());
    }
  });
  //  end of redirection

  async function InitLogin() {
  
    window.alert("Authenticating....\nclick ok to continue ");
    let item = { email, pass };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "apllication/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    if (result.error) {
      setError(result.error);
      localStorage.clear();
    } else {
      navigate(Role());
    }
  }

  return (
    <div
      style={{ height: "100vh" }}
      className=" bg-secondary   d-flex align-items-md-center justify-content-center">
      <Card style={{ width: "28rem" }}>
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
          <div className="mt-3 text-danger d-flex justify-content-center">
            <h4 style={{ fontSize: "15px" }}>{error}</h4>
          </div>

          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Email:</Form.Label>

              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                id="password"
                onChange={(e) => setPass(e.target.value)}
                placeholder="enter password"
              />
            </Form.Group>

            <div className="checkbox ">
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
                onClick={InitLogin}
                className="bg-success mt-2">
                Login
              </Button>
            </div>
          </Form>

          <div
            className="d-flex align-items-center justify-content-center "
            style={{ fontSize: "14px" }}>
            <span>
              {"Need an account? "}
              <Card.Link href="/register">Register</Card.Link>
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
