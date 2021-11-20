import './assets/styles/reset.css';
import './assets/styles/style.css';

import React, { useMemo, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Signature from './components/Signatures/Signature';
import UserContext from './contexts/UserContext';

const App = function () {
  const [userInfo, setUserInfo] = useState(null);

  const userPack = useMemo(() => ({
    userInfo,
    setUserInfo,
  }), [userInfo]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={userPack}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="signature" element={<Signature />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
