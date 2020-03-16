import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  })
);

export default function Register({validateFields}) {
  const classes = useStyles();
  const [LnameR, setLnameR] = React.useState("");
  const [FnameR, setFnameR] = React.useState("");
  const [emailR, setEmailR] = React.useState("");
  const [emailValidationR, setEmailValidationR] = React.useState("");
  const [password, setPassword] = React.useState("");


  function registerLogin(){
    console.log(validateFields)
    /* let vValid = this.validateFields(emailR, emailValidationR, password);
    console.log('vValid' , vValid)
    if (vValid) {
      
      console.log('ffffffffff')
    } */
  }
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="fullName" label="Nom" onChange={(event)=> setLnameR(event.target.value)} /> <br />
        <TextField required id="username" label="Nom utilisateur" onChange={(event)=> setFnameR(event.target.value)} /> <br />
        <TextField required id="email" label="Email" onChange={(event)=> setEmailR(event.target.value)}/> <br />
        <TextField required id="emailConfirmation" label="confirmation Email" onChange={(event)=> setEmailValidationR(event.target.value)} /> <br />
        <TextField required id="password" label="mot de passe" onChange={(event)=> setPassword(event.target.value)} /> <br />
        <Button id="registerLogin" variant="contained" onClick={() => { registerLogin(emailR, emailValidationR, password);}}>
          Inscription
        </Button>
      </form>
    </div>
  );
}
