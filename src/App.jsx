// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { app, storage } from './firebase';
// import { listAll, getDownloadURL, ref as storageRef } from 'firebase/storage';
// import { getDatabase, ref as dbRef, set } from "firebase/database";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Thankyou from './Thankyou';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;