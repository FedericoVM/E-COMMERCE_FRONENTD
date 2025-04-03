import { useField } from "formik";
import Form from 'react-bootstrap/Form'

const CustomFecha = ({label, ...props}) => {
    const [field, meta] = useField(props)
    
    return (
        <div>
            <Form.Label className="label-input-componente m-0">{label}</Form.Label>
            <input
            {...field}
            {...props}
            className="form-control mb-2"
            />
            {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </div>
    )
}

export default CustomFecha