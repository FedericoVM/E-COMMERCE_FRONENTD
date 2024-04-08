import {useField} from "formik";
import Form from "react-bootstrap/Form"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";

const Custominput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const {botonBloquear} = UserHook()
    
    return (
        <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
        {...field}
        {...props}
        disabled={botonBloquear}
        className={meta.touched && meta.error? "border mb-3 border-danger border-1 shadow-lg border-opacity-75" : "mb-3"}
     />
     {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
        </>
    )
}

export default Custominput