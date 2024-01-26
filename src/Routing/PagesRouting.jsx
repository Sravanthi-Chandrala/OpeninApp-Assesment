import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../FunctionalComponents/Login-Main';
import Dashboard from '../pages/uploads'; 
import ForgetPassword from '../FunctionalComponents/Forgot_Password';
import RegisterNow from '../FunctionalComponents/RigisterNow';

class PagesRouting extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='forget-password' element={<ForgetPassword />} />
                    <Route path='register-now' element={<RegisterNow />} />
                    <Route path='uploads' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default PagesRouting;
