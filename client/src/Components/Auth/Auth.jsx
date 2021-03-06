import React, { useState } from 'react'
import { Typography, Button, Paper, Grid, Container, Avatar, TextField } from "@material-ui/core"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyle from "./styles"
import Input from "./Input"
import kakao from "../../images/kakao.png"
import Icon from './Icon';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { homesignup , homesignin } from "../../actions/auth"

const Auth = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showpassword, setshowpassword] = useState(true);
  const [isSignup, setisSignup] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    name: "",
    password: "",
    cofirmpassword: "",
    firstName: "",
    lastName: "",
  });
  const submitEvent = (e) => {
    e.preventDefault();
    if(isSignup){
      console.log(isSignup);
      dispatch(homesignup(formData,navigate));
    }else{
      console.log("로그인");
      dispatch(homesignin(formData,navigate));
    }
  }
  const handleshowpassword = () => {
    setshowpassword(current => !current);
  }

  const changeEvent = (e) => {
    console.log(e.target.name);
    return setformData({...formData , [e.target.name] : e.target.value});
  }
  
  const switchmode = () => {
    setisSignup(current => !current);
    
  }
  const kakaoLogin = () => {
    window.open("http://localhost:5005/oauth/kakao","_self");
   
  }
  const googleLogin = () => {
    window.open("http://localhost:5005/oauth/google","_self");
  }

  const gitLogin = () => {
    const optionUrl = {
      client_id : "6883f433e1c1f25b525f",
      scopeUserEmail : "user:emai",
      scopeUserName : "read:user",
    }
    window.open(`https://github.com/login/oauth/authorize?client_id=${optionUrl.client_id}&scope=${optionUrl.scopeUserEmail}%20${optionUrl.scopeUserName}`,"_self");
    
  }


  return (
    <Container component={"main"} maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? "회원가입" : "로그인"}</Typography>
        <form className={classes.form} onSubmit={submitEvent}>
          <Grid Container spacing={2} >
            {
              isSignup && (
                <>
                  <Grid container>
                    <Input type={"text"} changeEvent={changeEvent} name={"firstName"} label={"firstName"} autoFocus />
                    <Input type={"text"} changeEvent={changeEvent} name={"lastName"} label={"lastName"} autoFocus />

                  </Grid>
                </>
              )}
            <Input type={"email"} changeEvent={changeEvent} name={"email"} label={"email"} autoFocus half />
            <Input type={showpassword ?  "password" :  "text" } handleshowpassword={handleshowpassword} changeEvent={changeEvent} name={"password"} label={"password"} autoFocus half />
            {isSignup && <Input type={showpassword ? "password"  :"text" } changeEvent={changeEvent} name={"cofirmpassword"} label={"cofirmpassword"} autoFocus half />}
            <Button onClick={googleLogin} fullWidth className={classes.googleButton} >
              <Icon/>구글 로그인
            </Button>
            <Button onClick={kakaoLogin} fullWidth className={classes.googleButton} >
              <img src={kakao} alt={"카카오 이미지"} />
            </Button>
            <Button onClick={gitLogin} fullWidth className={classes.googleButton}>
              <img width={"50em"} src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt={"카카오 이미지"} />
            </Button>

          </Grid>
          <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
            {isSignup ? "회원가입" : "로그인"}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchmode}>
                {isSignup ? "계정이 이미 있으신가요? 로그인하세요!" : "계정이 없으신가요? 회원가입을 진행하세요!"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth