import React, { useRef, useState } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../css/Login.css";

import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, login, currentUser, logout, resetpassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const history = useHistory();

  async function handleSumbit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("هذا الإيميل مُسجل بالفعل");
          break;
        case "auth/invalid-email":
          setError("الإيميل خاطئ");
          break;
        case "auth/weak-password":
          setError("الباسورد ضعيف");
          break;
        default:
          console.log("what's up");
      }
    }
    setLoading(false);
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          setError("الإيميل خاطئ");
          break;
        case "auth/user-disabled":
          setError(err.message);
          break;
        case "auth/user-not-found":
          setError("هذا الإيميل غير موجود");
          break;
        case "auth/wrong-password":
          setError("الرقم السري خاطئ");
          break;
          default:
            console.log("what's up");
      }
    }
    setLoading(false);
  }

  async function handleResetPassword() {
    setError("");
    setSuccess("");
    try {
      await resetpassword(emailRef.current.value);
      setSuccess(
        `${emailRef.current.value} :لقد ارسلت رسالة الى الإيميل الخاص بك`
      );
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("هذا الإيميل غير موجود");
      } else if (err.code === "auth/invalid-email") {
        setError("الإيميل غير صحيح");
      } else if (err.code === "auth/too-many-requests") {
        setError(
          "لقد طلبت اعادة انشاء الرقم السري مرات عديدة الرجاء المحاولة مرة اخرى لاحقًا"
        );
      } else setError(err.message);
    }
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (err) {
      setError("Failed to logout");
    }
  }

  return currentUser ? (
    <Container className="loginContainer" key="awelaw">
      <div className="account">
        <h1>حسابك الشخصي</h1>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="buttons">
        <button className="btn" id="signIn" onClick={handleLogout}>
          تسجيل الخروج
        </button>
      </div>
    </Container>
  ) : (
    <Container className="loginContainer" key="awelaw">
      <div style={{ paddingTop: "100px" }} />

      <div className="account">
        <h1>حسابك الشخصي</h1>
      </div>

      <>
        <div style={{ paddingTop: "50px" }} />

        <div className="inputs">
          <Form>
            {success.length > 0 && <Alert variant="success">{success}</Alert>}
            {error.length > 0 && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                required
                placeholder="Email"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                required
                placeholder="Password"
                subm
                ref={passwordRef}
              />
            </Form.Group>
            <button type="button" id="resetPassword" onClick={handleResetPassword}>Reset your password</button>
            <hr />

            <div className="buttons">
              <button
                type="submit"
                className="btn"
                id="signIn"
                onClick={handleLogin}
              >
                تسجيل الدخول
              </button>
              <div style={{ paddingTop: "10px" }} />
              <button
                disabled={loading}
                className="btn"
                id="signUp"
                onClick={handleSumbit}
              >
                إنشاء حساب جديد
              </button>
              <div style={{ paddingTop: "10px" }} />
            </div>
          </Form>
        </div>
      </>
    </Container>
  );
};

export default Login;
