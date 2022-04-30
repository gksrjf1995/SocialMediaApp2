import React from 'react'
import {useSelector} from "react-redux"
import stlyes from "./styles"

const Posts = () => {

  const posts = useSelector(state=>state.posts);
  const classes = stlyes();
  console.log(posts);
  return (
    <div>Posts</div>
  )
} 

export default Posts