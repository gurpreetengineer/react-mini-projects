import React from "react";
import { Form, Input, Button, Space, Card } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import "antd/dist/antd.css";
import "./Register.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Register = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <Card title="Register Form" style={{ width: 900, marginLeft: 200, marginTop: 60, textAlign: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(3, "Must be 3 characters or greater")
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .min(3, "Must be 3 characters or greater")
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),

            password: Yup.string()
              .min(3, "too short")
              .max(12, "too long")
              .required("required"),
            confirmpassword: Yup.string()
              .required("required")
              .oneOf([Yup.ref("password"), null], "Passwords must match"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            axios.post('/Users', values)
              .then(res => {
                console.log('res', res.data);
              })
              history.push("/login");
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
              className="form"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{}}
            >
              <Form.Item label="First Name" name="firstName">
                <Input
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName && (
                  <div style={{ color: "red" }}>{errors.firstName}</div>
                )}
              </Form.Item>

              <Form.Item label="Last Name" name="lastName">
                <Input
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
              </Form.Item>

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

              <Form.Item label=" Confirm Password" name="confirmpassword">

                <Input.Password
                  name="confirmpassword"
                  type="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.confirmpassword && touched.confirmpassword && (
                  <div style={{ color: "red" }}>{errors.confirmpassword}</div>
                )}
              </Form.Item>

              <Form.Item>

                <Button type="submit" htmlType="submit" className="button">
                  Submit
                </Button>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 14,
                }}
              >
                <Button type="link" htmlType="button"
                  onClick={handleLogin}
                >
                  Already have an account? Sign In
                </Button>
              </Form.Item>

            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Register;
