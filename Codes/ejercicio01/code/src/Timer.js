import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";


function App() {
  
  //const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        if (seconds > 59){
          setMinutos(minutos => minutos + 1);  
          setSeconds(0);
        }
        else if (minutos > 59){
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
      {horas} - {minutos} - {seconds}
    </div>
  );
}

export default App;