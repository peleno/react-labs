import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice";
import { Formik } from "formik";
import * as Yup from "yup";
import "antd/dist/antd.css";
import { Button, Space } from "antd";
import { Form, Input } from "formik-antd";
import { CheckoutContainer } from "./Checkout.styled";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 5,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

export const Checkout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <CheckoutContainer>
            <h1>Checkout</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    age: "",
                    email: "",
                    phone: "",
                    cardNumber: "",
                    address: "",
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(2, "At least 2 characters")
                        .max(20, "At most 20 characters")
                        .required("Required"),
                    lastName: Yup.string()
                        .min(2, "At least 2 characters")
                        .max(20, "At most 20 characters")
                        .required("Required"),
                    age: Yup.number("This field must be a number")
                        .min(18, "You must be adult")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email format")
                        .required("Required"),

                    phone: Yup.string()
                        .matches(
                            /^((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))$/g,
                            "Invalid phone number format"
                        )
                        .required("Required"),

                    cardNumber: Yup.string()
                        .matches(
                            /^(\d{4}\s?\d{4}\s?\d{4}\s?\d{4})$/g,
                            "Invalid card number format"
                        )
                        .required("Required"),
                    address: Yup.string()
                        .min(10, "Too short address")
                        .max(100, "Too long address")
                        .required("Required"),
                })}
                onSubmit={(values) => {
                    dispatch(clearCart());
                    history.push("/success");
                }}
            >
                {({ handleSubmit }) => (
                    <Form size="large" {...formItemLayout}>
                        <Form.Item label="First Name" name="firstName">
                            <Input name="firstName" />
                        </Form.Item>
                        <Form.Item label="Last Name" name="lastName">
                            <Input name="lastName" />
                        </Form.Item>
                        <Form.Item label="Age" name="age">
                            <Input name="age" />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input name="email" />
                        </Form.Item>

                        <Form.Item label="Phone" name="phone">
                            <Input name="phone" />
                        </Form.Item>
                        <Form.Item label="Card Number" name="cardNumber">
                            <Input name="cardNumber" />
                        </Form.Item>
                        <Form.Item label="Address" name="address">
                            <Input name="address" />
                        </Form.Item>

                        <Space>
                            <Button onClick={() => history.goBack()}>
                                Go Back
                            </Button>
                            <Button type="primary" onClick={handleSubmit}>
                                Continue
                            </Button>
                        </Space>
                    </Form>
                )}
            </Formik>
        </CheckoutContainer>
    );
};
