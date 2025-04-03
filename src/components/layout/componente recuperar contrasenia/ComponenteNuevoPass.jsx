import { Button, Form } from 'react-bootstrap'
import {useFormik} from 'formik'
import "./cambiarContrasenia.css"
import candado from '../../../assets/cambiarContrasenia/bloquear.png'
import { UserHook } from '../../../context/Contexto de Usuarios/UserHook'
import { recuperacionPassword } from '../../../validacionesSchema/recuperarPassword'

const ComponenteNuevoPass = ({handleCambiarContrasenia}) =>{

    const {botonBloquear} = UserHook()
        const {
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur
        } = useFormik({
            initialValues:{
                password:"", 
                confirmarPassword:""
            },
            validationSchema: recuperacionPassword,
            onSubmit: handleCambiarContrasenia
        })

    return (
        <div className='d-flex justify-content-center align-items-center body-nuevo-password'>
            <div className='col-11 contenedor-form col-sm-11 col-md-9 col-lg-7 border border-2 rounded  d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-center texto-rolling'>Rolling Store | Cuenta</h1>
            <div className='col-12 d-flex flex-column flex-sm-row justify-content-center align-items-center  my-sm-3'>
                <div className='d-flex justify-content-center col-sm-3 align-items-center col-md-5'>
                    <img className='img-candado' src={candado} alt="imagen-candado" />
                </div>
                <form className='col-8 form-recuperar-contrasenia col-sm-9 col-md-7' onSubmit={handleSubmit}>
                    <div className='my-1 my-sm-2 d-flex flex-column flex-sm-row flex-md-column col-12'>  
                    <Form.Label className='mb-1 col-sm-4 col-md-12'>Ingrese la nueva contraseña</Form.Label>
                    <div className='col-sm-8'>
                    <Form.Control className={errors.password ? 'form-cambiar-password border-danger' :'form-cambiar-password'} disabled={botonBloquear} value={values.password} onChange={handleChange} type="password" onBlur={handleBlur} placeholder="Contraseña" name='password'/>
                    {errors.password && touched.password &&<p className='d-none d-sm-block p-0 m-0 mensaje-error position-absolute'>{errors.password}</p>}
                    {errors.password && touched.password &&<p className='p-0 m-0 d-block d-sm-none col-12 mensaje-error-sm'>{errors.password}</p>}
                    </div>
                    </div>
                    <div className='my-2 my-sm-3 my-md-4 d-flex flex-column flex-sm-row flex-md-column col-12'>
                    <Form.Label className='mb-1 col-sm-4 col-md-12'>Repita la nueva contraseña</Form.Label>
                    <div className='col-sm-8'>
                    <Form.Control className={errors.confirmarPassword ? 'form-cambiar-password border-danger' :'form-cambiar-password'} disabled={botonBloquear} type="password" placeholder="Contraseña" value={values.confirmarPassword} onBlur={handleBlur} onChange={handleChange} name='confirmarPassword'/>
                    {errors.confirmarPassword && touched.confirmarPassword && <p className='p-0 m-0 mensaje-error position-absolute'>{errors.confirmarPassword}</p>}
                    </div>
                    </div>
                    <Button className='boton-cambiar-contrasenia mt-3 align-self-center align-self-sm-auto' disabled={botonBloquear}  type="submit">
                        Cambiar
                    </Button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default ComponenteNuevoPass