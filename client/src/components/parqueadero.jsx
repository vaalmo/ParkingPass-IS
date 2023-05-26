import React, { useState, useEffect } from 'react'

const Tarjeta = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/paymethods/parqueadero')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Parqueaderos</h1>
      <div style={{ display: 'flex' }}>
        {data.map(item => (
          <div key={item.idpark} style={{ flex: '0 0 300px', backgroundColor: 'lightblue', borderRadius: '10px', padding: '10px', margin: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>Parqueadero: {item.idpark}</p>
            <p>Celdas disponibles para carros: {item.celdascarro - item.celdasocupadascarro}</p>
            <p>Celdas disponibles para motos: {item.celdasmoto - item.celdasocupadasmotos}</p>
            <p>Tarifa para motos: {item.tarifamotos}</p>
            <p>Tarifa para carros: {item.tarifacarro}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Tarjeta