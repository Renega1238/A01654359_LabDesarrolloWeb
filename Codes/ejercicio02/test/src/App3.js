import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SAI
          </Navbar.Brand>
        </Container>

        <Nav defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="Tacos">
              <Link to="/tacos">Tacos</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Sandwiches">
              <Link to="/sandwiches">Sandwiches</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={"Rene"} id="collasible-nav-dropdown">
            <NavDropdown.Item>Home</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Item > Launch </NavDropdown.Item>
            <NavDropdown.Item > 
              Info
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>

        

      </Navbar>

      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>v


      <Switch>
        <Route path={"/tacos"} component={Tacos} />
        <Route path={"/sandwiches"} component={Sandwiches} />
      </Switch>
    </Router>
  );
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos(data) {
  return <h2>Tacos</h2>;
}

export default App;