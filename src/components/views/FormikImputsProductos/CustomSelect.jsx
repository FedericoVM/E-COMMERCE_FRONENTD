import {useField} from "formik";
import Form from "react-bootstrap/Form"

const CustomSelect = ({ label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
        <Form.Label>
            {label}
        </Form.Label>
        <Form.Select
        className="mb-3"
        {...field}
        {...props}
        />
        {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </>
    )
}

export default CustomSelect