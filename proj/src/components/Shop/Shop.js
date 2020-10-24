import React, { useState } from "react";

import { add, list } from "cart-localstorage";
import {
  Container,

  Card,
  CardColumns,
  Button,
  Modal,
  Alert,
} from "react-bootstrap";

import products from "./Products";
import "../../css/Shop.css";
export default function Shop(props) {
  const [show, setShow] = useState(false);
  const [lastAdded, setLastAdded] = useState();
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const { cartNumber, setCartNumber } = props;

  const handleClose = () => {setShow(false); setAdded(false)};
  const handleShow = () => setShow(true);

  function addToCart(id, quantity) {
    setError("");
    let product = products.find((m) => m.id === id);

    if (
      list()
        .map((m) => m.id)
        .includes(id)
    ) {
      setError("هذا المنتج في عربة الشراء الخاصة بك.");
    } else {
      setLastAdded(product);
      setAdded(true);
      add(product, quantity);
      setCartNumber(cartNumber + 1);
    }
    handleShow(true);
  }

  return (
    <Container className="shop">
      <h1>Products</h1>
      <div className="laptopShop">
        <CardColumns>
          {added ? (
            <Modal show={show} onHide={handleClose} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title style={{ color: "#0b0b0b" }}></Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ color: "#0b0b0b" }}>
                <img alt="#" src={lastAdded.src} className="d-block w-100" />
                <p style={{ color: "green" }}>تم إضافة هذا المنتج الى العربة</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
          {error ? (
            <Modal show={show} onHide={handleClose} animation={true}>
              <Alert variant="danger">
                {error}
              </Alert>
            </Modal>
          ) : null}
          {products.map((m) => (
            <>
              <Card style={{ padding: "20px" }}>
                <Card.Img variant="top" src={m.src} />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#42526e",
                      fontFamily: "Tajawal",
                      textAlign: "center",
                    }}
                  >
                    {m.name}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#42526e",
                      fontFamily: "Tajawal",
                      textAlign: "center",
                    }}
                  >
                    {m.information}
                  </Card.Text>
                  <footer style={{ textAlign: "center" }}>
                    <Button
                      disabled={list()
                        .map((t) => t.id)
                        .includes(m.id)}
                      onClick={() => addToCart(m.id, 1)}
                      variant="success"
                    >
                      {list()
                        .map((t) => t.id)
                        .includes(m.id) ? "موجود بالعربة" : "إضافة هذا المنتج الى العربة"}
 
                    </Button>{" "}
                    <p class="text-muted">
                      {"Category: " +
                        m.category.charAt(0).toUpperCase() +
                        m.category.slice(1)}
                    </p>
                    <p class="text-muted">
                      {m.price + " KWD"}
                    </p>
                  </footer>
                </Card.Body>
              </Card>
            </>
          ))}
        </CardColumns>
      </div>
    </Container>
  );
}
