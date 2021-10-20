//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useContext } from "react";

function App() {
  
  const [users, setUsers] = useState([{ id: 0, name: "Ruben" }]);

  const onClick = () => {};  

  return (
    <div>
      <input type="button" onClick={onClick} value="Update" />
      <div>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
