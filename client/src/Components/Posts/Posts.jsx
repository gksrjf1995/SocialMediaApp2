import React from 'react'
import {useSelector} from "react-redux"
import stlyes from "./styles"
import Post from "./Post/Post"
import {Grid , CircularProgress} from "@material-ui/core"


const Posts = () => {

  const posts = useSelector(state=>state.posts);
  const classes = stlyes();
  console.log(posts);
  return (
    !posts.length ? <CircularProgress/> : 
    <Grid >

    </Grid>
    
  )
} 

export default Posts