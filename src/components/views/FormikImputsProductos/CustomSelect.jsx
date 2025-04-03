import { useField } from "formik";
import Form from "react-bootstrap/Form"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import CustomInputDescuento from "./CustomInputDescuento";

const CustomSelect = ({ label,setInputDescuento, ...props }) => {
    const [field, meta] = useField(props);
    const { botonBloquear } = UserHook()

    return (
        <div className="d-flex justify-content-between align-items-end col-12 mb-3">
        <div className="col-5 align-self-end col-sm-4">
            <Form.Label>
                {label}
            </Form.Label>
            <Form.Select
                className=""
                {...field}
                {...props}
                disabled={botonBloquear}
            />
            {meta.touched && meta.error && <div className="text-validation">{meta.error}</div>}
            </div>
            {field.value === "Si" && <CustomInputDescuento setInputDescuento={setInputDescuento} label="Descuento(%) *" name="descuento" type="number"/>}
        </div>
    )
}

export default CustomSelect