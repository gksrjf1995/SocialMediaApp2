import React from 'react'
import usestlye from "./style"
import {AppBar , Typography , Toolbar, Avatar , Button } from "@material-ui/core"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const classes = usestlye();
  const user = false
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
          <div className={classes.brandContainer}>
         
            <Typography variant='h2' component={Link} to="/" align='center' className={classes.heading}>Media App</Typography>

          <Toolbar className={classes.toolbar}>
            {user ? <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user} src={user}>{user}</Avatar>
              <Typography className={classes.userName} variant={"h6"}>{user}</Typography>
              <Button variant="contained" className={classes.logout} color={"secondary"}>로그아웃</Button>
            </div> :  <Button variant="contained" color={"primary"}  component={Link} to="/auth">로그인</Button>
            }
          </Toolbar>
          </div>
    </AppBar>
  )
}

export default Navbar