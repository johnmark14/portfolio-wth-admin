import Home from './pages/home';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loader from 'components/Loader';

function App() {
  const [showLoader, setShowLoader] = useState(true)

    setTimeout(()=> {
        setShowLoader(false)
    },3000)
  return (
    <BrowserRouter>
    {showLoader ? <Loader/> : null}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
