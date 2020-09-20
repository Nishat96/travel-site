import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import SignIn from './Components/SignIn/SignIn';
import SearchResult from './Components/SearchResult/SearchResult';
import {createContext} from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CoxsBazar from './Components/CoxsBazar/CoxsBazar';
import SreeMongol from './Components/SreeMongol/SreeMongol';
import Sundarban from './Components/Sundarban/Sundarban';




export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>Email: {loggedInUser.email}</h3>
      <Router>
         <Switch>
          <Route path = "/home">
            <Home/>
          </Route>
          <Route path = "/booking">
            <CoxsBazar/>
          </Route>
          <Route path = "/sreemongol">
            <SreeMongol/>
          </Route>
          <Route path = "/sundarban">
            <Sundarban/>
          </Route>
          <Route path = "/signin">
            <SignIn/>
          </Route>
          <Route path = "/login">
            <Login/>
          </Route>
          {/* <Route path = "/searchresult">
            <SearchResult/>
          </Route> */}
          <PrivateRoute path = "/searchresult">
            <SearchResult/>
          </PrivateRoute>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>  
    
    </UserContext.Provider>
  );
}

export default App;
