import React from 'react'
import { useField } from "formik";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const CustomInputDescuento = ({ label, setInputDescuento, ...props }) => {
    const [field, meta] = useField(props);

    const { botonBloquear } = UserHook()

    useEffect(() => {
        field.value < 101 ? setInputDescuento(field.value) : "";
    }, [field.value, setInputDescuento]);

    return (
        <div className='col-6'>
            <Form.Label>{label}</Form.Label>
            <Form.Group className="col-12 col-sm-6">
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
            </Form.Group>
            {meta.touched && meta.error && (
                <div className="text-validation">{meta.error}</div>
            )}
        </div>
    )
}

export default CustomInputDescuento