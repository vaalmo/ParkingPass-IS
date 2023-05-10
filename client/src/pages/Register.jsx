import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    idUsuario:"",
    tipoUsuario:"",
    nombre:"",
    apellido:"",
    correo:"",
    contrasena:"",
  })

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };



  return (
    <div className='auth'>
      <h1>Regístrate</h1>
      <form>
        <input required type="text" placeholder='Número de identificación' name='idUsuario' onChange={handleChange}/>
        <input required type="text" placeholder='Tipo de usuario' name='tipoUsuario' onChange={handleChange}/>
        <input required type="text" placeholder='Nombre' name='nombre' onChange={handleChange}/>
        <input required type="text" placeholder='Apellido' name='apellido' onChange={handleChange}/>
        <input required type="email" placeholder='Correo' name='correo' onChange={handleChange}/>
        <input required type="password" placeholder='Contraseña' name='contrasena' onChange={handleChange}/>

        <button onClick={handleSubmit}>Registrarse</button>
        {err && <p>{err}</p>}
        <span>Tienes una cuenta? <Link to="/login">Loguéate</Link></span>
      </form>
    </div>
  )
}

export default Register;