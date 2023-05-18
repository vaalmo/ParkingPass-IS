import React from 'react'

const AddCard = () => {
  return (
    <div className='auth'>
      <h1>Agregar nueva tarjeta</h1>
      <form>
        <input required type="text" placeholder='Tipo de tarjeta' />
        <input required type="text" placeholder='Numero tarjeta' />
        <input required type="password" placeholder='ccv' />
        <input required type="text" placeholder='Nombre del propetario' />
        <button>Agregar</button>
      </form>
    </div>
  )
}

export default AddCard