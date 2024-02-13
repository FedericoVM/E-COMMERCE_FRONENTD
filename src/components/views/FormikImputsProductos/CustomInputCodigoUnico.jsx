import Form from "react-bootstrap/Form"
import { useField } from "formik";

const CustomCodigoUnico = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
        className="mb-3"
        disabled= {true}
        {...field}
        {...props}
        />
        </>
    )
}

export default CustomCodigoUnico