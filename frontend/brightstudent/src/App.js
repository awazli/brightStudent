import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';
import Admin from './components/Admin';
import AddTeachers from './components/AddTeachers';
import Teacher from './components/Teacher';
import Edit from './components/Edit';


function App() {
  return (
    <>
    
    <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addTeachers" element={<AddTeachers />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path ="/edit/:id" element = {<Edit />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
