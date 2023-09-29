import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import login from './pages/Login';
import registerSuperAdmin from './pages/RegisterSuperAdmin';
import verifyMail from './pages/VerifyMail';
import Onboarding from './pages/OnBoarding';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import landing from './components/password recovery/landing';
import mailSent from './components/password recovery/mailSent';
import reset from './components/password recovery/reset';
import PasswordSuccess from './components/password recovery/passwordSuccess';

const Routerr = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' Component={login} />
            <Route path='/signup/superadmin' Component={registerSuperAdmin} />
            <Route path='/verifymail' Component={verifyMail} />
            <Route path='/onboarding' Component={Onboarding} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/password/recovery' Component={landing} />
            <Route path='/password/mailsent' Component={mailSent} />
            <Route path='/password/reset' Component={reset} />
            <Route path='/password/success' Component={PasswordSuccess} />
            <Route path='*'  Component={NotFound} />
        </Routes>
    </HashRouter>
  )
}

export default Routerr;
