import { useState } from "react";

export default function FirebaseFunctions(props) {
  const [firebase, setFirebase] = useState(props.getFirebase());
  const [currentUser, setCurrentUser] = useState("Cargando...");

  return {
    firebase,
    currentUser,
    getCurrentUser: (params) => {
      console.log(params);
      setCurrentUser(params);
    }
  };
}
