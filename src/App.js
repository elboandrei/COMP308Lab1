import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; //added
import React, { useState }  from 'react';
import Comment from './components/Comment/Comment'; //added
import Result from './components/Result/Result'; //added
import Login from './components/Login/Login';//added
import PrivateRoute from './components/PrivateRoute'; 
import auth from './auth/auth';



function App() {

  return (
    <div className="wrapper">
      <Router> 
      <Routes>
      <Route path= "/login" element = { <Login/> }> </Route>
      <Route  exact path="/" element= { <PrivateRoute/> }> 
      <Route  exact path="/" element={  <Comment/> } />
      </Route>
      <Route  exact path="/result" element= { <PrivateRoute/> }> 
      <Route exact path = "/result" element = {<Result/> } > </Route>
      </Route>
     
          <Route path="*" element= { <Login/> }> </Route>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
