import React from 'react';
import { Container } from "@material-ui/core"
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';


function App() {



  return (
      <Container maxWidth="lg">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes> 
        </BrowserRouter>
      </Container>
  );
}

export default App;
