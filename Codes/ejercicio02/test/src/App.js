import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function RouteConfigExample() {

  // Creamos un hook 
  const [title, setTitle] = useState("");
  return (
    <Router>
      <div>

        <input onChange = { (e) => setTitle(e.target.value)}/>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
            <button value = {"Tacos"} onClick = {(prop) => change(prop)}>Tacos</button>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
            <button value = {"Sandwiches"} onClick = {(prop) => change(prop)}>Tacos</button>
          </li>
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
  console.log(props.target);
  document.title = props.target.value;
}


function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos() {
  return <h2>Tacos</h2>;
}