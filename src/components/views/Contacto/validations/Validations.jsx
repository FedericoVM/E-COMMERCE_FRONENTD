import React from 'react'

const regExpProductName = /^[A-Za-z\s?]+$/;
const regExpUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
const regNumero = /^\d+$/;
const regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
const regObservacion = /^[a-zA-Z0-9_.-]*$/

export const validarNombre = (nombre) => {
  if (regExpProductName.test(nombre) && nombre.trim() !== "" && nombre.length < 15){
    return true;
  } else {
    return false
  }
}

export const validarUrl = (url) => {
    if(regExpUrl.test(url) && url.trim() !== ""){
        return true;
    } else {
        return false
    }
}

export const validarTelefono = (telefono) => {
    if (regNumero.test(telefono) && telefono.trim() !== ""){
        return true;
    } else {
        return false
    }
}

export const validarEmail = (email) => {
    if (regEmail.test(email) && email.trim() !== "") {
        return true;
    } else {
        return false
    }
}

export const validarObservacion = (observacion) => {
    if (regObservacion.test(observacion) && observacion.trim() !== "") {
        return true;
    } else {
        return false
    }
}