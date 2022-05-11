import React , {useEffect} from 'react';
import { Container , Grow , Grid} from "@material-ui/core"
import Posts from "./Components/Posts/Posts"
import Form from "./Components/Form/Form"
import useStyle from "./styles"
import {getposts} from "../src/actions/posts"
import {useDispatch} from "react-redux"
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';


function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  

  const [currentId , setcurrentId] = useState(null);

  useEffect(()=>{
    dispatch(getposts());
    
  },[currentId , dispatch]);

  return (
      <Container maxWidth="lg">
        <Navbar/>
        <Grow in>
          <Container>
            <Grid container className={classes.mainContainer} justify='space-between'  spacing={4}>
              <Grid item xs={12} sm={7}>
                <Posts currentId={currentId} setcurrentId={setcurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setcurrentId={setcurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
}

export default App;
