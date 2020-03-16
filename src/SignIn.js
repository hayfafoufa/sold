import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

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

const validateForm = () => {
  
};

export default function SignIn() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="login" label="Nom utilisateur ou email" /> <br />
        <TextField required id="password" label="mot de passe" /> <br />
        <Button variant="contained" color="register" onClick={validateForm}>
          Se connecter
        </Button>
      </form>
    </div>
  );
}
