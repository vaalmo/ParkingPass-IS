import React, {useContext} from 'react';
import QRCode from 'react-qr-code';
import { AccountContext } from "./AccountContext";

function App() {
  const useAuth = () => {//
    const { user } = useContext(AccountContext);
    return user;
  };
  const isAuth = useAuth();

  const qrData = isAuth.username; // Los datos que quieres codificar en el QR

  const qrContainerStyle = {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: 'lightblue',
    borderRadius: '8px',
    maxWidth: '300px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const qrTitleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  return (
    <div style={qrContainerStyle}>
      <h1 style={qrTitleStyle}>QR de autenticación</h1>
      <QRCode value={qrData} />
    </div>
  );
}

export default App;