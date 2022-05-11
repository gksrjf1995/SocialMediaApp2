import React , {useState}from 'react'
import {Typography , Button , Paper , Grid , Container , Avatar, TextField } from "@material-ui/core"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyle  from "./styles"
import Input from "./Input"
const Auth = () => {
  const classes = useStyle();

  const [ showpassword , setshowpassword] = useState(false);
  const [isSignup , setisSignup] = useState(false);
  const [value , setvalues ] = useState({
    email : "",
    name : "",
    password : "",
    cofirmpassword : "",
    firstName : "",
    lastName : "",
  });
  const submitEvent = () => {
    
  }
  const handleshowpassword = () => {
    setshowpassword(current=>!current);
  }

  const changeEvent = (e) => {
    setvalues(current=>e);
  }
  const switchmode = () => {
    setisSignup(current=>!current);
    showpassword(false);
  }
  return (
    <Container component={"main"} maxWidth="xs">
       <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar> 
            <Typography variant='h5'>{isSignup ? "회원가입" : "로그인"}</Typography>  
            <form className={classes.form} onsubmit={submitEvent}>
                <Grid Container spacing={2} >
                    {
                        isSignup && (
                            <>
                                <Grid  container>
                                    <Input type={"email"} changeEvent={changeEvent} name={"firstName"} label={"firstName"} autoFocus  />
                                    <Input type={"password"} changeEvent={changeEvent} name={"lastName"} label={"lastName"} autoFocus  />
                                </Grid> 
                            </>
                            )}
                                <Input type={"email"} changeEvent={changeEvent} name={"email"} label={"email"} autoFocus half/>
                                <Input type={showpassword ? "text" : "password"} handleshowpassword={handleshowpassword} changeEvent={changeEvent} name={"password"} label={"password"} autoFocus half/>
                                {isSignup && <Input type={showpassword ? "text" : "password"} changeEvent={changeEvent} name={"cofirmpassword"} label={"cofirmpassword"} autoFocus half/>}                            
                            
                   

                </Grid>
                <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
                    {isSignup ? "회원가입" : "로그인"}
                </Button>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Button onClick={switchmode}>
                            {isSignup? "계정이 이미 있으신가요? 로그인하세요!" : "계정이 없으신가요? 회원가입을 진행하세요!"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper> 
    </Container>
  )
}

export default Auth