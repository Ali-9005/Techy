import React from "react";
import { Container, Form } from "react-bootstrap";
import "../css/Login.css";

// import Rebase from "re-base";
// import firebase from 'firebase';


// const firebaseConfig = {
//   apiKey: "AIzaSyDnmEvy2fHGwxr54GklKgU1tQE4zhmNhZU",
//   authDomain: "techy-e7e6e.firebaseapp.com",
//   databaseURL: "https://techy-e7e6e.firebaseio.com",
//   projectId: "techy-e7e6e",
//   storageBucket: "techy-e7e6e.appspot.com",
//   messagingSenderId: "118311454188",
//   appId: "1:118311454188:web:a90f00f2942eae84f16cc9",
//   measurementId: "G-K99SHQV94Z"
// };

// const app = firebase.initializeApp(firebaseConfig);
// const base = Rebase.createClass(app.database());

// export { base }


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
          {/* <Form.Group controlId="formBasicUserName">
            <Form.Control type="username" placeholder="الأسم" autoComplete />
          </Form.Group> */}
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
