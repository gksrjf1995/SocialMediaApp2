import React , {useEffect} from 'react';
import memories from "./images/memories.png"
import { Container , AppBar , Typography , Grow , Grid} from "@material-ui/core"
import Posts from "./Components/Posts/Posts"
import Form from "./Components/Form/Form"
import useStyle from "./styles"
import {getposts} from "../src/actions/posts"
import {useDispatch , useSelector} from "react-redux"

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const selector = useSelector(state=>state);
 
  useEffect(()=>{
    dispatch(getposts());
  },[]);

  return (
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography variant='h2' align='center' className={classes.heading}>Media App</Typography>
          <img src={memories} className={classes.image} height="60" alt={"images"}/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='center' spacing={4}>
              <Grid item xs={12} sm={7}>
                <Posts/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
}

export default App;
