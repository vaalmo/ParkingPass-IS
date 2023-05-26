import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AccountContext } from "./AccountContext";
import Login from "./Auth/Login";
import PrivateRoutes from "./Auth/PrivateRoutes";
import SignUp from "./Auth/Signup";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Tarjeta from "./tarjetaCoB";
import Parqueadero from "./parqueadero";
import QRCode from "./qrcode";


const Views = () => {
  const { user } = useContext(AccountContext);
  return user.loggedIn === null ? (
    <Text>Loading...</Text>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/tarjeta" element={<Tarjeta />} />
      <Route path="/parqueadero" element={<Parqueadero/>}/>
      <Route path="/logout" element={<Logout />} />
      <Route path="/qrcode" element={<QRCode />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};



export default Views;