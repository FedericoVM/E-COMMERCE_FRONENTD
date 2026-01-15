import { CardPayment} from "@mercadopago/sdk-react";
import { useCallback, useMemo} from "react";
import { UserHook } from "../../../context/Contexto de Usuarios/UserHook";
import instance from "../../../axios/instance";
import { ProductosHook } from "../../../context/Contexto de Productos/ProductosHook";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MercadoPagoBricks = (props) => {

  const { usuarioCarrito, tokenUser, obtenerCarritoUsuario} = UserHook();
  const { productoAComprar, obtenerProductos } = ProductosHook();

  const navigate = useNavigate();

  const sweetAlertPago = (pagoData) => {
    if (pagoData.status === 200) {
      Swal.fire({
        title: "Gracias por su compra.",
        icon: "success",
        draggable: true,
      });
    }
    if (pagoData.status === 203) {
      Swal.fire({
        title: pagoData.data.mensaje,
        icon: "warning",
        draggable: true,
      });
    }
    obtenerProductos();
    navigate("/");
  };

  const sweetAlertErrorCompra = (errorText) => {
    Swal.fire({
      icon: "error",
      title: "Oops",
      text: errorText,
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      willClose: () => {
        clearInterval(5000);
        navigate("/");
      },
    });
  };

  const initializacion = useMemo(
    () => ({
      amount: Number(props.montoTotal),
    }),
    []
  );

  const onReady = useCallback(() => {
  props.setFormBricksListo(true);
  }, []);

  const onSubmitCarrito = useCallback(async (formData) => {
    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`,
      },
    };

    const userDataYProducts = {
      userProducts: {
        carritoFront: usuarioCarrito,
      },
      formData: formData,
    };

    try {
      const pagoCarrito = await instance.post(
        "/mercadoPago/finalizar-compra-carrito",
        userDataYProducts,
        config
      );
      sweetAlertPago(pagoCarrito);
      obtenerCarritoUsuario(tokenUser);
    } catch (error) {
      sweetAlertErrorCompra(error.response.data.message);
    }
  }, []);

  const onSubmitProducto = useCallback(async (formData) => {
    const config = {
      headers: {
        authorization: `Bearer ${tokenUser}`,
      },
    };

    const userDataYProducto = {
      producto_id: productoAComprar,
      formData: formData,
    };

    try {
      const pagoProducto = await instance.post(
        "/mercadoPago/finalizar-compra-producto",
        userDataYProducto,
        config
      );
      sweetAlertPago(pagoProducto);
    } catch (error) {
      sweetAlertErrorCompra(error.response.data.message);
    }
  }, []);

  const onError = useCallback((error) => {
    console.log(error);
    
    Swal.fire({
      icon: "error",
      title: "Oops",
      text: `Hubo un problema intente mas tarde.`,
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      willClose: () => {
        clearInterval(4000);
        navigate("/");
      },
    });
  }, []);

  const customization = useMemo(
    () => ({
      paymentMethods: {
        ticket: "all",
        creditCard: "all",
        prepaidCard: "all",
        debitCard: "all",
        mercadoPago: "all",
      },
    }),
    []
  );

  return (
    <div>
      <CardPayment
        initialization={initializacion}
        onSubmit={props.carrito ? onSubmitCarrito : onSubmitProducto}
        customization={customization}
        onError={onError}
        onReady={onReady}
      />
    </div>
  );
};

export default MercadoPagoBricks;
