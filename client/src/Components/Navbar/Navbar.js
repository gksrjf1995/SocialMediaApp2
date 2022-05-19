import React from 'react'
import usestlye from "./style"
import {AppBar , Typography , Toolbar, Avatar , Button } from "@material-ui/core"
import { Link } from 'react-router-dom';
import {useSelector , useDispatch} from "react-redux"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const selector = useSelector(state=>state.auth.user);
  const gitdata = useSelector(state=>state.auth.git);
  console.log(gitdata);
  const dispatch = useDispatch();
  const classes = usestlye();
  
  useEffect(()=>{
    const token = selector?.token
    console.log(token);
  },[selector?.id]);
  
  const logoutBtn = () => {
    dispatch({type:"LOGOUT"});
  }

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
          <div className={classes.brandContainer}>
         
            <Typography variant='h2' component={Link} to="/" align='center' className={classes.heading}>Media App</Typography>

          <Toolbar className={classes.toolbar}>
            {selector || gitdata ? <div className={classes.profile}>
              <Avatar className={classes.purple} alt={selector?._json?.picture} src={selector?._json?.picture || selector?._json?.kakao_account?.profile?.profile_image_url || gitdata.avatar_url}/>
              <Typography className={classes.userName} variant={"h6"}>{selector?._json?.given_name || selector?.displayName || gitdata.name}</Typography>
              <Button variant="contained" className={classes.logout} color={"secondary"} onClick={logoutBtn}>로그아웃</Button>
            </div> :  <Button variant="contained" color={"primary"}  component={Link} to="/auth">로그인</Button>
            }
          </Toolbar>
          </div>
    </AppBar>
  )
}

export default Navbar