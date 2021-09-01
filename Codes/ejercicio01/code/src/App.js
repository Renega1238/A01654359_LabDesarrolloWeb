/** Ejercicio 01: Incluye
 * Agregar componentes JSX
 * Funciones -> Función recibiendo estructura de datos
 * Boton -> Suma 1 cada que se oprime 
 * Boton -> Actualiza dinámicamente una estructura de datos 
 * Reloj
 * Timer -> El cual se actualiza solito
*/


// Librerías o componentes 
import logo from './logo.svg';
import './App.css';
import "./index.css";

import React, {useEffect, useState} from 'react';

// Importamos nuestro componente JSX 
import Button from './components/Button';
import Input from './components/Input';
import NewInput from './components/newInput';
import {sum, mul, res} from './functions/basicFunction'
import FormatName from './functions/FormatName';


// Función principal 
function App() {

  // Declaración función que suma uno con el botón
  // El useState = 0 es el valor inicial
  const [count, setCount] = useState(0);


  // Variable, función
  // TIP, inicializar como arreglo para que lo reconozca
  // Para agragar una función #############
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


  // Función para agregar usuarios al click
  const onClick = () => 
  {

    // Arreglo extendido
    // Lo agregamos con [] para que lo pueda mapear
    setUsers([...users, {id:users.length, firstName:"Raul", lastName:"Ibai"}]);

  }


    // Agregamos atributos de manera dinámica
    var dataComponent = 
    {

      type:"button",
      value:"Update"
    
    }


    // Para reloj
    // Hacemos gancho en Hook 
    // Cuando le hable se va a crear una nueva Date
    const [date, setDate] = useState(new Date());

    // useEffect se llama solita cada cierto tiempo
    // ** Se movió al Timer **

    // Para nuestro Timer personalizado
    const [seconds, setSeconds] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    // -> Necesitamos usar un solo userEffect
    useEffect (() =>
    {

      // El intervalo para decir c/cuanto se actualiza reloj
      // var timerID = setInterval(() => tick(), 1000);

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

      // Regresamois una función que limpie la pantalla
      /*
      return function cleanup(params)
      {

        clearInterval(timerID);
      
      }
      */

      return () => clearInterval(interval);

    }); 
    


    function tick()
    {

      setDate(new Date());

    }



  // Virtualizar
  return (

    <div>

      Botón dinámico con URL: 
      <br></br>
      <Button 
        url={"https://yobiss.com"} 
        name={"YOBISS"} 
        class={"MyButton"} 
        active={true}
      />

      <br></br>
      <br></br>

      Input dinámico: 
      <br></br>
      <Input name={"Hola como estas"} />

      <br></br>

      Funciones:
      <br></br>
      Suma: {sum(3,3)} <br></br>
      Mult: {mul(3,3)} <br></br>
      Rest: {res(7,3)} <br></br>

      <br></br>

      Función FormatName, la cual recibe el arreglo (objeto) de usuarios:
      <FormatName user={users[1]} />

      {count}<br></br>
      <button onClick = { () => setCount(count + 1)}>Sumar</button>

      <br></br>
      <br></br>

      <input onClick={onClick} {...dataComponent} />
      <div>
        {users.map((e) => (
          <div>
            {e.id}: {e.firstName} - {e.lastName}
          </div>
        ))}
      </div>

      <br></br>
      <br></br>

      <h1>{date.toLocaleTimeString()}</h1>

      <br></br>
      <br></br>
      
      Quitar comentarios en userEffect para modificar reloj en vez de Timer y viceversa
      <br></br>
      Nuestro propio Timer: <br></br>
      {horas} : {minutos} : {seconds}
    </div>
    
    );

    
}

export default App;