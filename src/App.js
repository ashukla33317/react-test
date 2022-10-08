
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Cancelled from './Cancelled';
import Delivered from './Delivered';
import AppRouter from './AppRouter';
import Subsciptions from './Subsciptions';
const App = () => {
  return (
   
    <>
     <AppRouter/>
      <Routes>
        <Route path='/' element={<Delivered/>}/>
        <Route path='cancel' element={<Cancelled/>}/>
        <Route path='sub' element={<Subsciptions/>}/>
      </Routes>
    </>
  );
}

export default App;