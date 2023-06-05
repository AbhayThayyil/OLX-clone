import React, { useEffect, useContext } from "react";
import "./App.css";
// React router
import { BrowserRouter as Router, Route } from "react-router-dom";
//Importing signup
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import Post from "./store/PostContext";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { AuthContext, FirebaseContext } from "./store/Context";
import ViewPost from "./Pages/ViewPost";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/viewPost">
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
