import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <hr />
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path='/*' element={ <Login /> } />
        <Route path='/*' element={ <Navigate to="/about" /> } />

      </Routes>
    </UserProvider>
  )
}
