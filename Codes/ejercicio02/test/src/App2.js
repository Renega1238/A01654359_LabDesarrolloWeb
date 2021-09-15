import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios"




export default function App() {

    
    const [nombres, setNombres] = useState([]);

    /*
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        const p = res.data;
        //console.log(res);
        console.log(p);
        setNombres(p);

    });
    */
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
          console.log(res);
      
          setNombres(...nombres, res.data.map((person) => {
          return (
          <li>{person.name}</li>
          )
          }))
        });
    
      },[]);

      /*
      <ul>
            {nombres.map((person) => (
                <li>{person.name}</li>
            ))}{" "}
        </ul>
        */
  return (
    <Router>
      <div>

      <ul>{nombres}</ul>

        
        <ul>
            <Link to="/tacos">Tacos</Link>
        </ul>
        <li>
            <button onClick = {() => chnange}>CLICK</button>
        </li>
        <ul>
            <Link to="/sandwiches">Sandwiches</Link>
        </ul>
        <Switch>
          <Route path={"/tacos"} component={Tacos} />
          <Route path={"/sandwiches"} component={Sandwiches} />
        </Switch>
      </div>
    </Router>
  );
}

// Vamos a darle al titulo el valor que escribamos
const change = (props) =>{
    const [nombres, setNombres] = useState([]);

    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        const p = res.data;
        //console.log(res);
        console.log(p);
        setNombres(p);

    });

  console.log(props.target);
  document.title = props.target.value;
}


function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos() {
  return <h2>Tacos</h2>;
}