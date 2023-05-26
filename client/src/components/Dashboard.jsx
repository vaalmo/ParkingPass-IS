import React, { useContext, useEffect, useState } from 'react';
import { AccountContext } from "./AccountContext";

const Dashboard = () => {
  const useAuth = () => {
    const { user } = useContext(AccountContext);
    return user;
  };
  const isAuth = useAuth();
  const [data, setData] = useState({ saldo: 0 });

  useEffect(() => {
    fetch(`http://localhost:4000/paymethods/saldo/${isAuth.username}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  console.log(data.saldo);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{fontSize: '36px', marginBottom: '10px', fontWeight: 'bold' }}>Dashboard</h1>
      <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '5px' }}>
        <p style={{fontWeight: 'bold' }}>Saldo: $ {data.saldo ?? 0}</p>
      </div>
    </div>
  )
}

export default Dashboard;