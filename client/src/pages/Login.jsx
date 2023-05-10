import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Iniciar Sesión</h1>
      <form>
        <input required type="idUsuario" placeholder='Número de identificación' />
        <input required type="text" placeholder='Contraseña' />
        <button>Login</button>
        <p>Error!</p>
        <span>No tienes una cuenta? <Link to="/register">Regístrate</Link></span>
      </form>
    </div>
  )
}

export default Login