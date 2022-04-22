import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/navBar/NavBar';
import Home from './pages/home/Home';
import { Container } from '@material-ui/core'
import Auth from './pages/auth/Auth';
function App() {




  return (
    <Router>
      <Container maxWidth="lg" >
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Auth />} path="/auth" />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
