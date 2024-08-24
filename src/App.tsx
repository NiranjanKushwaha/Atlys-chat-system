import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostDataContainer } from './components/PostDataContainer';
import { SignUpMainContainer } from './components/SignUpMainContainer';
import LoginContainer from './components/LoginContainer';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginContainer/>} />
        <Route path='/login' element={<LoginContainer/>} />
        <Route path='/home' element={<PostDataContainer/>} />
        <Route path='/register' element={<SignUpMainContainer/>} />
      </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
