import { useField } from "formik";
import Form from "react-bootstrap/Form"
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import CustomInputDescuento from "./CustomInputDescuento";

const CustomSelect = ({ label,setInputDescuento, ...props }) => {
    const [field, meta] = useField(props);
    const { botonBloquear } = UserHook()


    return (
        <>
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

            {field.value === "Si" && <CustomInputDescuento setInputDescuento={setInputDescuento} label="Descuento(%) *" name="descuento" type="number"/>}
        </>
    )
}

export default CustomSelect