import './assets/styles/reset.css';
import './assets/styles/style.css';

import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Signature from './components/Signatures/Signature';

const App = function () {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn setUserInfo={setUserInfo} />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="signature" element={<Signature userInfo={userInfo} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
