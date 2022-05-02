import React , {useEffect} from 'react';
import memories from "./images/memories.png"
import { Container , AppBar , Typography , Grow , Grid} from "@material-ui/core"
import Posts from "./Components/Posts/Posts"
import Form from "./Components/Form/Form"
import useStyle from "./styles"
import {getposts , Editpost} from "../src/actions/posts"
import {useDispatch , useSelector} from "react-redux"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const selector = useSelector(state=>state.posts);
  console.log(selector);
  const [currentId , setcurrentId] = useState(null);
  
  useEffect(()=>{
    dispatch(getposts());
    dispatch(Editpost(currentId));
  },[currentId]);

  return (
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography variant='h2' align='center' className={classes.heading}>Media App</Typography>
          <img src={memories} className={classes.image} height="60" alt={"images"}/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between'  spacing={4}>
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
