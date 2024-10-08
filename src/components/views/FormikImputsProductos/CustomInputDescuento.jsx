import React from 'react'
import { useField } from "formik";
import { useEffect, useState } from "react";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const CustomInputDescuento = ({ label, setInputDescuento, ...props }) => {
    const [field, meta] = useField(props);

    const { formatDescuento } = ProductosHook()
    const { botonBloquear } = UserHook()

    useEffect(() => {
        field.value < 101 ? setInputDescuento(field.value) : "";
    }, [field.value, setInputDescuento]);


    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Group as={Row} className="mb-3">
                <Col sm="4" className="">
                    <Form.Control
                        disabled={botonBloquear}
                        sm="2"
                        className="h-100"
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        {...field}
                        {...props}
                    />
                </Col>
            </Form.Group>
            {meta.touched && meta.error && (
                <div className="text-validation">{meta.error}</div>
            )}
        </div>
    )
}

export default CustomInputDescuento