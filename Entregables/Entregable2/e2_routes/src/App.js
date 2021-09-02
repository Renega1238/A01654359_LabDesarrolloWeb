  /** ENTREGABLE 2 
   * Uso de rutas de navegación 
   * Ruta con hooks de estado y efecto
   * Ruta con Timer
   * Ruta con useHistory y useParams
   * Esqueleto de repositorio de profe
   */

import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

// Importamos de react-router-dom para tener las rutas
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams 
} from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/hooks",    // Definimos la ruta, en la cual tendremos subrutas  (estas serán mapeadas)
    component: Hooks,
    routes: [
      {
        path: "/hooks/estado",
        component: HookState, 
      },
      {
        path: "/hooks/efecto",
        component: HookEffect
      }
    ]
  },
  {
    path: "/timer",
    component: Timer
  }, 
  {
    path: "/params/:data", 
    component: HookParams
  }
];

export default function RouteConfigExample() {
  
  return (
  
    <Router>

      <ul>
        <li>
          <Link to = "/home">Home</Link>
        </li>
        <li>
          <Link to = "/hooks">Hooks</Link>
        </li>
        <li>
          <Link to = "/timer">Timer</Link>
        </li>
        <li>
          <Link to= "/params/:data">Show data (Hook useParams)</Link>
        </li>
      </ul>

      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>

      <HistoryBtn></HistoryBtn>
      
    </Router>
  );
}


// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
 
/** FIN TAREA */
function Home() {
  return (
    <div>

      <h1>Entregable 02</h1>
      <br></br>
      René García Avilés <br></br>
      A01654359

    </div>
  
  );
}

function Hooks({ routes }) {
  return (
    <div>
      <h2>Hooks page</h2>
    
      <ul>
          <li>
            <Link to="/hooks/estado">useState</Link>
          </li>
          <li>
            <Link to="/hooks/efecto">useEffect</Link>
          </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

/** 
 * 
 * Espacio para HookState y sus funciones auxiliares 
 * 
 **/

// Agregamos atributos de manera dinámica


function HookState()
{

  var dataComponent = 
  {

    type:"button",
    value:"Update"

  }

  // Función para agregar usuarios al click
  const onClick = () => 
  {

    // Arreglo extendido
    // Lo agregamos con [] para que lo pueda mapear
    setUsers([...users, {id:users.length, firstName:"Raul", lastName:"Ibai"}]);

  }

  // Arreglo para HookState
  // Inicializamos el arreglo 
  const [users, setUsers] = useState([
    {
      id: 0,
      firstName : "Rene", 
      lastName : "Garcia Aviles"
    }, 
    {
      id: 1, 
      firstName: "Ivan", 
      lastName: "Albarran"
    }
  ]);

  return (
    
    <div>

    <input onClick={onClick} {...dataComponent} />

    <div>

      {users.map((e) => (

        <div>

          {e.id}: {e.firstName} - {e.lastName}
        
        </div>

      ))}
    
    </div>

    </div>

  );

}
/** Fin de HookState y funciones auxiliares */


/** 
 * 
 * Espacio para HookEffect y sus funciones auxiliares 
 * 
 **/
function HookEffect()
{

  function tick()
  {

    setDate(new Date());

  }

  useEffect (() =>
  {

    // El intervalo para decir c/cuanto se actualiza reloj
    var timerID = setInterval(() => tick(), 1000);

    // Regresamois una función que limpie la pantalla
    
    return function cleanup(params)
    {

      clearInterval(timerID);
    
    }
   
  }); 

  const [date, setDate] = useState(new Date());

  return ( 
    <h1>{date.toLocaleTimeString()}</h1>
  );

}

/** Fin de HookEffect y funciones auziliares */


/** 
 * 
 * Espacio para Timer y sus funciones auxiliares 
 * 
 **/
function Timer()
{

  // Para nuestro Timer personalizado
  const [seconds, setSeconds] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  // UseEffect para Timer
  useEffect (() =>
    {

      // Intervalo para nuestro reloj
      let interval = null;
    
      interval = setInterval(() => {
        if (seconds >= 59){
          setMinutos(minutos => minutos + 1);  
          setSeconds(0);
        }
        else if (minutos >= 59){
          setHoras(horas => horas + 1);  
          setMinutos(0);  
          setSeconds(0);

        }
        else{
        setSeconds(seconds => seconds + 1);
        }
      }, 1000);

      return () => clearInterval(interval);

    }); 

    return (

      <div>
          {horas} : {minutos} : {seconds}
      </div>

    );
}
/** Fin de Timer y funciones auziliares */

/** 
 * 
 * Espacio para HookParams y sus funciones auxiliares 
 * 
 **/
function HookParams()
{

  let { data }  = useParams();

  return (
    <div>
    <div>Data se recibe desde el url, elimine ":data" y escriba lo que sea</div>
    <div>Showing data: {data}</div>
    </div>
  )
}

/** Fin de useParams y funciones auziliares */

/** TAREA
 * useHistory
 * useParams
 */
 function HistoryBtn()
 {
 
   let history = useHistory();
 
   function ClickHistory()
   {
     history.push("/home");
   }
 
   return (
 
     <div>
         <button onClick={ClickHistory}>Go Home</button>
     </div>
 
   );
 
 }

 /** Fin de useHistory y funciones auziliares */