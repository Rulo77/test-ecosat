import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './App.css';

function App() {

  const [inputs, setInputs]=useState({});
  const [mensaje, setMensaje]=useState({});
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const HandleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/api/login",{
      method: 'POST', 
      body: JSON.stringify(inputs),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data =>{
      if(data.mensaje==="Bienvenido"){
        navigate('/Home');
      }else{
        setMensaje([{...data}])
      }
    } )
    .catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <div className='login'>
      <h1>CHAMBERLAIN GROUP</h1>
      <h2>Bienvenido</h2>
     <form onSubmit={HandleSubmit}>
      <input type="text"
      name="usuario" 
      value={inputs.usuario || ""} 
      onChange={handleChange}
      placeholder='Direccion de correo'/>
      <input
       name="contrasena" 
       value={inputs.contrasena || ""} 
       onChange={handleChange}
      type="password" placeholder='Password'/>
      <label><input type='checkbox'/>Recordar Usuario</label>
      {mensaje.length > 0 ? <p>{mensaje[0].mensaje}</p>:<></> }
      <div>
       <input type='submit' value="Ingresar"/>
       <button className='register'>Registrar</button>
       </div>
     </form>
     </div>
    </div>
  );
}

export default App;
