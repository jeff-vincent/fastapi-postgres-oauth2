import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpLogin from "./components/sign-up-login";
import CreatePet from './components/create-pet';
import Header from './components/header';
import Grid from './components/dashboard-grid';
import Profile from './components/profile';
import './App.css';


const App = () => {
  return (
    <div>
     
      <Router>
      <Header />
        <div className='app'>
          <div className="app-container">
            <h1>FastAPI React Example</h1>
            <Routes>
              <Route exact path="/" element={<SignUpLogin />} />
              <Route exact path="/pet" element={<CreatePet />} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/learn" element={<Grid />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
