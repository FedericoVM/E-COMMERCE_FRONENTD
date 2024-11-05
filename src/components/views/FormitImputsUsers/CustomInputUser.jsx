import Form from "react-bootstrap/Form"
import {useField} from "formik"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const CustomInputUser = ({label, ...props}) => {

    const [field, meta] = useField(props);
    const {botonBloquear} = UserHook()

    return (
        <>
        <Form.Label className="m-0 p-0">{label}</Form.Label>
        <Form.Control
        {...field}
        {...props}
        disabled={botonBloquear}
        className={meta.touched && meta.error? "border mb-2 border-danger border-1 shadow-lg border-opacity-75" : "mb-2"}
        />
        {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </>
    )
}

export default CustomInputUser