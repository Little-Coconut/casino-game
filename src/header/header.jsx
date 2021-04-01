import React, { useState } from 'react';
import  './header.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CasinoIcon from '@material-ui/icons/Casino';
import { SvgIcon } from '@material-ui/core';

import avatar from '../images/avatar.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: ' 0% 5% 0% 0%',
  },
  marg:{
    margin: ' 0% 0% 0% 6%',
  }
}));

const Header = ({balance}) =>{
  const classes = useStyles();

 const [name, updateName] = useState('');   
 const [inputValue, updateInputValue] = useState('');

    const change = (e) => {
        updateInputValue(e.target.value);
    }
    const loginButton = () => {
        if(inputValue.length < 1 || name){
            return updateName('');
        } else {
            return updateName(inputValue);
        }
    };
    return(
      <AppBar position="static" color="transparent">  
         <div>
            <Toolbar className={classes.toolbar}>
            <Button  className={classes.marg} variant="outlined"  color="primary" onClick={loginButton}>{name ? 'Log out' : 'Log In'}</Button>
           
            <div className={classes.marg}>{balance}$ </div> 
              { 
                !name ? 
                  <div>
                    <TextField id="standard-basic" className="standard-basic" label="User name" onChange={change} />
                  </div> : 
                  <div>
                    <Avatar alt="Remy Sharp" src={avatar} />
                    <div> {name}</div>
                  </div>
              }
            </Toolbar>
            <SvgIcon component={CasinoIcon} className="logo" fontSize="large" />
        </div>
      </AppBar>
    )
}

export default Header;