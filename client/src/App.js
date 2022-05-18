import React from 'react';
import { Container } from "@material-ui/core"
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios"
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import { useEffect } from 'react';
import {useDispatch , useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const getkakao = async() => {
      try{
        const res = await axios.get("http://localhost:5005/oauth/success",{
          withCredentials : true ,
          // headers: {
          //   'Content-Type': 'application/json',
          //   "Access-Control-Allow-Credentials": true,
          // },
        });
        console.log(res.data.user);
        if(res?.data?.user){
          dispatch({type : "LOGIN" ,  data : { user : res?.data?.user , token : res?.data?.user?.token }})
        }else {
          console.log("로그인 다시 시도");
        }
      }catch(err){
        console.log(err);
      }
    }
    getkakao();
  },[]);
 


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
