import Form from "react-bootstrap/Form"
import {useField} from "formik"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const CustomInputEdad = ({label, ...props}) => {

    const [field, meta] = useField(props);
    const {botonBloquear} = UserHook()

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
        disabled={botonBloquear}
        className={meta.touched && meta.error? "border mb-3 border-danger border-1 shadow-lg border-opacity-75" : "my-2"}
        />
        {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </>
    )
}

export default CustomInputEdad