import './Home.css';
import { Link } from 'react-router-dom';
import placeholder from "./assets/place_holder.svg"



const Home= ()=> {
    return ( 
     <>
     <nav>
        <ul>
            <li>user</li>
            <li>OPERACIONES</li>
            <li>logout</li>
        </ul>
     </nav>
     <aside>
        <h1>CHAMBERLAIN GROUP</h1>
        <ul>
            <li><Link >Dashboard</Link></li>
            <li><Link >Alertamiento</Link></li>
        </ul>
     </aside>
    
     <div className='buttons'>
      <button>Ubicación</button>
      <button>Zona</button>
      <button>Sensor</button>
      </div>
       <section className='main'>
         <h4>Nivel de riesgo</h4>
           <div>
            <input type='text' className='buscar'/>
            <button>Buscar</button>
            <label>Tipo<select>
                <option>Cuartos frios</option>
                <option>Cuartos</option>
                <option>sensores</option>
                </select></label>

                <table>
                    <thead>
                        <tr>
                            <th>Ubicación</th>
                            <th>Sensor</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Tiempo transcurrido</th>
                        </tr>
                    </thead>
                </table>
                <hr/>
                <img src={placeholder} alt='imagen alterna' width={450} height={400}/>
           </div>

       </section>
  
   
     </>
     );
}

export default Home;