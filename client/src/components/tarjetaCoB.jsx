import React, { useContext, useState } from 'react';
import { AccountContext } from "./AccountContext";
import "./css/tarjeta.css";

const Tarjeta = () => {

    const useAuth = () => {
      const { user } = useContext(AccountContext);
      return user ;
    };
    const isAuth = useAuth();

    const [data, setData] = useState({})

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        console.log(data)
        fetch('http://localhost:4000/paymethods/agregarTarjeta', {
            method: 'POST',
            body: JSON.stringify({ data, isAuth }),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(json => setData(json.data))
        
    }

    return (
      <div className='form-box'>
        <form  onSubmit={submit}>
          <div className="field1">
            <input name='tipo' type="text" placeholder='Tipo de tarjeta' onChange={updateData} /><br />
            <input name='numero' type="text" placeholder='Numero tarjeta' onChange={updateData} /><br />
            <input name='ccv' type="password" placeholder='ccv'  onChange={updateData} /><br />
            <input name='nombre' type="text" placeholder='Nombre del propetario' onChange={updateData} />
          </div>
          <button className='submitBtn'>Agregar</button>
        </form>

      </div>

    )
  }

export default Tarjeta