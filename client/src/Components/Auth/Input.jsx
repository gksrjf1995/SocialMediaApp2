import React from 'react'
import { TextField , Grid , InputAdornment , IconButton  } from '@material-ui/core'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useStyle  from "./styles"

const Input = ({name, changeEvent , handleshowpassword , label , half , autoFocus , type }) => {
  
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={half ? 12 : 6}>
        <TextField
            name={name}
            onChange={changeEvent}
            variant={"outlined"}
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name==="password" && <InputAdornment position='end'>
                <IconButton onClick={handleshowpassword}>
                    {type==="password" ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                </IconButton>
            </InputAdornment>}
        />
    </Grid>
  )
}

export default Input