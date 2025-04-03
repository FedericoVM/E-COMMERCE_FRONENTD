import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterPrincipal } from "./routers/RouterPrincipal";
import "./components/layout/Header/header.css";
import UserProvider from "./context/Contexto de Usuarios/UserContext";
import ProductosProvider from "./context/Contexto de Productos/ProductosContext";
import AdminProvider from "./context/Contexto de Admin/AdminContext";

function App() {
  return (
    <div className=" background-paginas">
      <UserProvider>
        <AdminProvider>
        <ProductosProvider>
          <RouterPrincipal />
        </ProductosProvider>
        </AdminProvider>
      </UserProvider>
    </div>
  );
}
export default App;
