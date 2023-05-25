import React, { useState } from 'react'

const Tarjeta = () => {

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
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(json => setData(json.data))
        
    }

    return (
      <div>
          <form  onSubmit={submit}>
            <input name='tipo' type="text" placeholder='Tipo de tarjeta' onChange={updateData} />
            <input name='numero' type="text" placeholder='Numero tarjeta' onChange={updateData} />
            <input name='ccv' type="password" placeholder='ccv'  onChange={updateData} />
            <input name='nombre' type="text" placeholder='Nombre del propetario' onChange={updateData} />
            <button>Agregar</button>
          </form>

      </div>

    )
  }

export default Tarjeta