import { useField } from "formik";
import Form from "react-bootstrap/Form"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import CustomInputDescuento from "./CustomInputDescuento";

const CustomSelect = ({ label,setInputDescuento, ...props }) => {
    const [field, meta] = useField(props);
    const { botonBloquear } = UserHook()

    return (
        <div className="d-flex justify-content-between col-12">
        <div className="col-5">
            <Form.Label>
                {label}
            </Form.Label>
            <Form.Select
                className="mb-3"
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