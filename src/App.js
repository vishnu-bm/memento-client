import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './component/navBar/NavBar';
import Home from './pages/home/Home';
import { Container } from '@material-ui/core'
import Auth from './pages/auth/Auth';
function App() {




  return (
    <Router>
      <Container maxWidth="xl" >
        <NavBar />
        <Routes>
          <Route element={() => <Navigate to="/posts" />} path="/" exact />
          <Route element={<Home />} path="/posts" />
          <Route element={<Home />} path="/posts/search" />
          <Route element={<Home />} path="/posts/:id" />
          <Route element={<Auth />} path="/auth" />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
