import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  // getting data from the local storage of logged in user
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <Navbar expand="md" className="bg-body-secondary shadow">
        <Container fluid className="d-flex">
          <Navbar.Brand>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h2 className="text-warning">
                <span className="text-success">Shop-</span>Snap
              </h2>
            </Link>
          </Navbar.Brand>
          <div className=" d-flex">
            <Nav.Link className="mx-2" href="/products">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" href="/shops">
              Shops
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-3 "></Nav>

            <Nav className="mx-1">
              {localStorage.getItem("user-info") ? (
                <></>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
              )}
              {localStorage.getItem("user-info") ? (
                <NavDropdown title={user && user.name}>
                  <NavDropdown.Item onClick={logOut}>logout</NavDropdown.Item>
                  <NavDropdown.Item>edit profile</NavDropdown.Item>
                </NavDropdown>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
