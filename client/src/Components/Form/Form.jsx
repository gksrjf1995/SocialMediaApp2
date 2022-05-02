import React  , { useState , useEffect }from 'react'
import { TextField  , Button , Typography , Paper} from '@material-ui/core'
import styles from "./styles"
import FileBase64 from 'react-file-base64';
import {useDispatch , useSelector} from "react-redux"
import {createPost, Editpost} from "../../actions/posts"


const Form = ({currentId ,setcurrentId}) => {
  const classes = styles(); 
  const target = useSelector((state)=> currentId ? state.posts.find((item)=>{return item._id === currentId}) : state.posts);
  console.log(currentId);
  console.log(target);
  const dispatch = useDispatch(); 
  const [postsDate ,setPostsDate] = useState({
    creator : "",
    title : "",
    tags : "", 
    selectFile : "",
    message : "",
  });
  useEffect(()=>{
    if(target) setPostsDate(target);
  },[target]);

  const handlesubmit = (e) => {
    e.preventDefault();
    
    
    if(currentId){
      
      dispatch(Editpost(currentId,postsDate));
      clear();
    }else{
      dispatch(createPost(postsDate));
      clear();
    }
  }

  const clear = () => {
    console.log("지우기실행");
    setcurrentId(null);
    setPostsDate({
      creator : "",
      title : "",
      tags : "", 
      selectFile : "",
      message : "",
    });
    
  }
  //self Start
  
   

  //self End
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handlesubmit}>
        <Typography variant='h6'>{currentId ? "Updating"  : "Creating" }</Typography>
        <TextField name="creator" label='제작자' variant="outlined" fullWidth value={postsDate.creator} onChange={e=>setPostsDate({...postsDate , creator : e.target.value })}/>
        <TextField name="title"  label='제목' variant="outlined" fullWidth value={postsDate.title} onChange={e=>setPostsDate({...postsDate , title : e.target.value })}/>
        <TextField name="message"  label='메세지' variant="outlined" fullWidth value={postsDate.message} onChange={e=>setPostsDate({...postsDate , message : e.target.value })}/>
        <TextField name="tags"  label='태그' variant="outlined" fullWidth value={postsDate.tags} onChange={e=>setPostsDate({...postsDate , tags : e.target.value })}/>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth type="submit">작성완료</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" fullWidth size="small" onClick={clear}>지우기</Button>
      </form>
       <div className={classes.fileInput}>
        <FileBase64
          type="file"
          multiple={false}
          onDone={({base64}) => setPostsDate({ ...postsDate, selectFile: base64})}
        />
       </div>
    </Paper>
  )
}

export default Form