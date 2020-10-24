import React, { useState } from "react";

import { list, remove, destroy } from "cart-localstorage";
import "../../css/Cart.css";
// import products from "./Products";

import { Container, Card, CardColumns, Button, Modal } from "react-bootstrap";
export default function Shop(props) {
  const [show, setShow] = useState(false);
  const [removed, pushRemoved] = useState([]);
  const [lastRemoved, setLastRemoved] = useState({});

  const { cartNumber, setCartNumber } = props;

  const handleClose = () => {
    setShow(false);
    setLastRemoved(false);
  };
  const handleShow = () => setShow(true);

  function removeFromCart(id) {
    let product = list().find((m) => m.id === id);
    pushRemoved([...removed, id]);
    remove(id);
    setLastRemoved(product);
    handleShow(true);
    setCartNumber(cartNumber - 1);
  }

  function removeAll() {
    pushRemoved(list().map((m) => m));
    setCartNumber(0);
    destroy();
  }

  return (
    <Container className="cart">
      {list().length ? (
        <>
          <h1>Cart</h1>
          <Button id="removeAll" variant="danger" onClick={removeAll}>
            Remove all
          </Button>
        </>
      ) : (
        <h1>Your cart is empty</h1>
      )}

      <div className="laptopShop">
        <CardColumns>
          {removed ? (
            <Modal show={show} onHide={handleClose} animation={true}>
              <Modal.Header closeButton>
                <Modal.Title style={{ color: "#0b0b0b" }}></Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ color: "#0b0b0b" }}>
                <img alt="#" src={lastRemoved.src} className="d-block w-100" />
                <p style={{ color: "#FF0000" }}>
                  تم إزالة هذا المنتج من العربة
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
          {list().map((m) => (
            <>
              {!removed.includes(m.id) ? (
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
                      لاب توب جميل جدًا بمواصفات عالية
                    </Card.Text>
                    <footer style={{ textAlign: "center" }}>
                      <Button
                        onClick={() => removeFromCart(m.id)}
                        variant="success"
                      >
                        إزالة المنتج من العربة
                      </Button>{" "}
                      <p class="text-muted">
                        {"Category: " +
                          m.category.charAt(0).toUpperCase() +
                          m.category.slice(1)}
                      </p>
                      <p class="text-muted">{m.price + " KWD"}</p>
                    </footer>
                  </Card.Body>
                </Card>
              ) : null}
            </>
          ))}
        </CardColumns>
      </div>
    </Container>
  );
}
