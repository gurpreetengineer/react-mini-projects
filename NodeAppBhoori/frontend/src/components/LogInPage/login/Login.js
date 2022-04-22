import React from "react";
import { Form, Input, Button, Alert, Card } from "antd";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "antd/dist/antd.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Login.css"
import { PromiseProvider } from "mongoose";

import { useDispatch } from 'react-redux';
import { UserAllowance } from '../../Redux/AuthSlice';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setstate] = useState();

  const register = () => {
    history.push("/register");
  };

  var genToken = () => {
    return Math.random().toString(36).substr(2);
  };

  const handleOnSubmit = values => {
    axios.post("/Users/login", values).then((res) => {
      console.log('res', res.data);
      setstate(res.data);
      if (res.data === 'user not found') {
        history.push('/pagenotfound')
      } else if (res.data === 'password not matched') {
        history.push('/pagenotfound')
      } else {
        dispatch(UserAllowance({
          isUserLoggedIn: true,
          userToken: genToken(),
        }));
        history.push('/home');
      }
    });
  }

  return (
    <>
      <Card title="Login Form" style={{ width: 900, marginLeft: 200, marginTop: 130, textAlign: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),

            password: Yup.string()
              .min(3, "too short")
              .max(12, "too long")
              .required("required"),
          })}
          onSubmit={(values) => {
            handleOnSubmit(values);
          }}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <Form
              onFinish={handleSubmit}
              style={{ marginTop: 30 }}
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{}}
            >
              {state ? (
                <Alert message="Login successfully" type="success" showIcon />
              ) : null}

              <Form.Item label="Email" name="email">
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.password && touched.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 3,
                  span: 16,
                }}
              >
                <Button
                  type="submit"
                  htmlType="submit"

                >
                  Submit
                </Button>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 14,
                  span: 14,
                }}
              >
                <Button
                  type="link"
                  htmlType="button"
                  onClick={register}
                >
                  Don't have an account? Sign Up
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Login;
