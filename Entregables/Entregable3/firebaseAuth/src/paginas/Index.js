import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import SignUp from "./Signup";
import Login from "./Login";
import getFirebase from "../firebase/firebaseconfiguration";

import Main from "./main";

export default function Index(props) {
  const firebase = getFirebase();

  const socialLogin = async (props) => {
    await firebase
      .auth()
      .signInWithPopup(props)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signOut = async () => {
    try {
      if (firebase) {
        await firebase.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      alert(error.message);
    }
    props.history.push("/");
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(props);
    try {
      if (props) {
        console.log("iniciando");
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(data.get("email"), data.get("password"));
        //console.log("user", user);
        props.history.push("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const signupSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    try {
      if (firebase) {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            data.get("email"),
            data.get("password")
          );
        console.log("user", user);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Router>
      {props.currentUser ? (
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => (
              <Main/>
              
            )}
          ></Route>
          <Route
            path={"/logout"}
            render={() => (
              <Logout
                signOut={signOut}
                firebase={props.firebase}
                history={props.history}
              />
            )}
          ></Route>
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => (
              <Login
                firebase={props.firebase}
                loginSubmit={loginSubmit}
                history={props.history}
                socialLogin={socialLogin}
              />
            )}
          ></Route>
          <Route
            path={"/signup"}
            render={() => (
              <SignUp
                firebase={props.firebase}
                signupSubmit={signupSubmit}
                history={props.history}
              />
            )}
          ></Route>
        </Switch>
      )}
    </Router>
  );
}
