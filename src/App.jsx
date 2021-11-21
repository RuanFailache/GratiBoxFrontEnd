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
import SignatureOptions from './components/Signatures/SignatureOptions';
import SignaturePlans from './components/Signatures/SignaturePlans';

import UserContext from './contexts/UserContext';
import PlanContext from './contexts/PlanContext';

const App = function () {
  const [userInfo, setUserInfo] = useState(null);

  const userInfoState = useMemo(() => ({
    userInfo,
    setUserInfo,
  }), [userInfo]);

  const [plan, setPlan] = useState({
    type: null,
    receive: null,
    itensDelivery: [],
  });

  const planState = useMemo(() => ({
    plan,
    setPlan,
  }), [plan]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={userInfoState}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />

          <PlanContext.Provider value={planState}>
            <Route path="signature" element={<SignaturePlans />} />
            <Route path="signature/options" element={<SignatureOptions />} />
          </PlanContext.Provider>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
