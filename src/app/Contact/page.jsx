"use client";

import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import styles from "./page.module.css";

const page = () => {
  const onFinish = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Contact</h1>
      <h2 className={styles.subtitle}>Enter your details below</h2>

      <Form
        name="customForm"
        layout="vertical"
        onFinish={onFinish}
        className={styles.form}
      >
        {/* First Row: First Name and Last Name */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please enter your first name" }]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please enter your last name" }]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>
        </Row>

        {/* Second Row: Email Address */}
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email address" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>
        </Row>

        {/* Third Row: Password and Confirm Password */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password className={styles.input} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password className={styles.input} />
            </Form.Item>
          </Col>
        </Row>

        {/* Fourth Row: Phone Number */}
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Row>
          <Col xs={24}>
            <Form.Item className={styles.submitAlign}>
              <Button
                type="primary"
                htmlType="submit"
                block
                className={styles.submitButton}
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default page;
