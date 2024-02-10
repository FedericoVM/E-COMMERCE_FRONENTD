import Form from "react-bootstrap/Form"
import {useField} from "formik"

const CustomInputEdad = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
        onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        {...field}
        {...props}
        className={meta.touched && meta.error? "border mb-3 border-danger border-1 shadow-lg border-opacity-75" : "mb-3"}
        />
        {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </>
    )
}

export default CustomInputEdad