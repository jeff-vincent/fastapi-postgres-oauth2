import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpLogin from "./components/sign-up-login";
import Topics from './components/topics';
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
            <Routes>
              <Route exact path="/" element={<SignUpLogin />} />
              <Route exact path="/topics" element={<Topics />} />
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
