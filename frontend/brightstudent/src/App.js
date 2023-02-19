import './App.css';
import React from 'react';
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
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
