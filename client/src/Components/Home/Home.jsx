import React , {useState , useEffect}from 'react'
import { Container , Grow , Grid} from "@material-ui/core"
import Posts from "../Posts/Posts"
import Form from  "../Form/Form"
import useStyle from "./styles"
import axios from 'axios'
import {getposts} from "../../actions/posts"
import {useDispatch} from "react-redux"
const Home = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [currentId , setcurrentId] = useState(null);

  useEffect(()=>{
    dispatch(getposts());
    const getkakao = async() => {
      try{
        const res = await axios.get("http://localhost:5005/oauth/success",{
          withCredentials : true ,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(res);
      }catch(err){
        console.log(err);
      }
    }
    getkakao();
  },[currentId , dispatch]);
  

  return (  
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
  )
}

export default Home