import React from 'react'
import {useSelector} from "react-redux"
import stlyes from "./styles"
import Post from "./Post/Post"
import {Grid , CircularProgress} from "@material-ui/core"


const Posts = () => {
  
  const posts = useSelector(state=>state.posts);
  const classes = stlyes();

  return (
    !posts.length ? <CircularProgress/> : 
    <Grid container className={classes.Grid} alignItems={"stretch"} spacing={2}>
     {posts.map((item)=>{
       return <Grid item key={item._id} xs={12} sm={6}>
         <Post post={item}/>
       </Grid>
         
     })}
    </Grid>
    
  )
} 

export default Posts