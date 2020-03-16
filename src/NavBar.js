import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Dialog from '@material-ui/core/Dialog';
import Button from "@material-ui/core/Button";

import SignIn from "./SignIn";
import Register from "./Register";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isLogin, setIsLogin] = React.useState(false);
  const [isSign, setIsSign] = React.useState(false);

  const handleClickOpenLogin = () => {
    setIsLogin(true);
    setIsSign(false);
  };

  const handleClickOpenSign = () => {
    setIsLogin(false);
    setIsSign(true);
  };

  const handleClose = () => {
    setIsLogin(false);
    setIsSign(false);
  };

  const validateFields = (email, emailValidation, pword) => {
    let emailValid = false 
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
      emailValid = true
    }
    let passwordValid = pword.length >= 6;
    console.log(emailValid , passwordValid)
    return (emailValid && passwordValid && email == emailValidation ) ? true : false; 
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button variant="contained" color="primary" size="small" onClick={handleClickOpenLogin}>Login</Button>
          <Button variant="contained" color="primary" size="small" onClick={handleClickOpenSign}>Register</Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={isLogin || isSign}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{width: "100%", maxWidth: "none"}}
      >
            {isLogin && <SignIn />}
            {isSign && <Register validateFields = {validateFields}/>}
        </Dialog>
    </div>
  );
}
