import {useField} from "formik";
import Form from "react-bootstrap/Form"

const Custominput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    
    return (
        <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
        {...field}
        {...props}
        className={meta.touched && meta.error? "border mb-3 border-danger border-1 shadow-lg border-opacity-75" : "mb-3"}
     />
     {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </>
    )
}

export default Custominput