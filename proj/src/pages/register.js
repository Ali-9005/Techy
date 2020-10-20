import React from "react";
import { Container, Form } from "react-bootstrap";
import "../css/Login.css";
export default function Login() {
  return (
    <Container className="loginContainer">
      <div style={{ paddingTop: "100px" }} />

      <div class="account">
        <h1>حسابك الشخصي</h1>
      </div>
      <div style={{ paddingTop: "50px" }} />
      <div class="inputs">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="البريد الإلكتروني" autoComplete />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="الرقم السري" />
          </Form.Group>
        </Form>
      </div>
      <hr />
      <div class="buttons">
      <button class="btn" id="signIn">
          تسجيل الدخول
        </button>
        <div style={{paddingTop: "10px"}} />
        <button class="btn" id="signUp">
          إنشاء حساب جديد
        </button>
      </div>
    </Container>
  );
}
