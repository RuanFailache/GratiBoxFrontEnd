import './assets/styles/reset.css';
import './assets/styles/style.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';

const App = function () {
  const [, setUserInfo] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="sign-in" element={<SignIn setUserInfo={setUserInfo} />} exact />
        <Route path="sign-up" element={<SignUp />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
