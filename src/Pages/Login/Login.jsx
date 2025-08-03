import React, { useState } from "react";
import "./style.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function Login(e) {
    e.preventDefault();
    navigate("/home");
  }
  return (
    <div className="Login_Container">
      <Form className="Login_form">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" autoComplete="on" autoFocus placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" autoComplete="on" placeholder="Password" />
        </Form.Group>
        <Form.Check inline label="Remember me" name="group1" type="checkbox" />
        <Button
          role="button"
          onClick={(e) => Login(e)}
          className="Login_btn"
          tabIndex={0}
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
