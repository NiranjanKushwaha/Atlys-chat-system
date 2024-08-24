import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostDataContainer } from './components/PostDataContainer';
import { SignUpMainContainer } from './components/SignUpMainContainer';

function App() {
  return (
    <React.Fragment>
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<PostDataContainer/>} />
        <Route path='/register' element={<SignUpMainContainer/>} />
      </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
