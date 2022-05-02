import React from 'react'
import {Card , CardActions , CardContent , CardMedia ,Button , Typography } from "@material-ui/core"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment"
import UseStyles from "./styles"

const Post = ({post}) => {
  const styles = UseStyles();
  console.log(post);
  return (
    <Card className={styles.card} >
      <CardMedia className={styles.media} image={post.selectFile} title={post.title}/>
      <div className={styles.overlay}>
        <Typography variant={"h6"}>{post.creator}</Typography>
        <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={styles.overlay2}>
        <Button style={{color:"white"}} size="small" onClick={()=>{}}>
          <MoreHorizIcon />
        </Button>
      </div>

      <div className={styles.details}>
        <Typography variant="body2" color="textSecondary">{post.tags.map((item)=>{return `#${item}`}).join(",")}</Typography>
      </div>

      <CardContent>
        <Typography className={styles.title} variant="h5" gutterBottom >{post.message}</Typography>
      </CardContent>
      <CardActions className={styles.CardActions}>
        <Button size={"small"} color="primary" onclick={()=>{}} >
          <ThumbUpIcon fontSize={"small"}/> 
           Like {post.likeCount}
        </Button>
        <Button size={"small"} color="primary" onclick={()=>{}} >
          <DeleteIcon fontSize={"small"}/>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post