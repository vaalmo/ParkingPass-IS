import { Route, Routes } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import Login from "./Auth/Login";
import SignUp from "./Auth/Signup";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import PrivateRoutes from "./Auth/PrivateRoutes";
import { useContext } from "react";
import { AccountContext } from "./AccountContext";


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
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};



export default Views;