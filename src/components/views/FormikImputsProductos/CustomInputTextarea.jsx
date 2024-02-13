import {useField} from "formik";
import Form from "react-bootstrap/Form"
const CustomImputTexarea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="form d-flex flex-column">
        <Form.Label className="form-label">{label}</Form.Label>
        <Form.Control
        {...field}
        {...props}
        as="textarea"
        placeholder="Descripcion"
        className={meta.touched && meta.error? "border border-danger border-1 shadow-lg border-opacity-75 mb-1 form-control" : "mb-3 form-control"}
     />
     {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </div>
    )
}

export default CustomImputTexarea