import React , { useState } from 'react'
import {Card , CardActions , CardContent , CardMedia ,Button , Typography } from "@material-ui/core"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment"
import UseStyles from "./styles"
import {deletePost , getposts , likePost} from "../../../actions/posts"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';




const Post = ({post , setcurrentId}) => {
  const styles = UseStyles();
  const dispatch = useDispatch();
  const [likecount ,setlikeCount] = useState(false);
  const postEdit = () => {
    setcurrentId(post._id);
  } 
  
  const deletepostEv = () => {
    dispatch(deletePost(post._id));
   
    
  }
  const likePostEv = () => {
    dispatch(likePost(post._id));
    setlikeCount(current=>!current);
  }

  useEffect(()=>{
   
    dispatch(getposts());
   
    
  
  },[likecount]);

  return (
    <Card className={styles.card} >
      <CardMedia className={styles.media} image={post.selectFile} title={post.title}/>
      <div className={styles.overlay}>
        <Typography variant={"h6"}>{post.creator}</Typography>
        <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={styles.overlay2}>
        <Button style={{color:"white"}} size="small" onClick={postEdit}>
          <MoreHorizIcon />
        </Button>
      </div>

      <div className={styles.details}>
        <Typography variant="body2" color="textSecondary">{ post.tags.map((item)=>{return `#${item} `})}</Typography>
      </div>
      <Typography  variant="h5" className={styles.title} >{post.title}</Typography>
      <CardContent>
        <Typography  variant="body2" color="textSecondary" component={"p"} >{post.message}</Typography>
      </CardContent>
      <CardActions className={styles.CardActions}>
        <Button size={"small"} color="primary" onClick={likePostEv} >
          <ThumbUpIcon fontSize={"small"} /> 
           <p>&nbsp;Like &nbsp;{post.likeCount}</p>
        </Button>
        <Button size={"small"} color="primary" onClick={deletepostEv} >
          <DeleteIcon fontSize={"small"}/>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post