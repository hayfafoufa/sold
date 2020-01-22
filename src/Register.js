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

export default function Register() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="fullName" label="Nom" /> <br />
        <TextField required id="username" label="Nom utilisateur" /> <br />
        <TextField required id="email" label="Email" /> <br />
        <TextField required id="emailConfirmation" label="confirmation Email" />
        <br />
        <TextField required id="password" label="mot de passe" /> <br />
        <Button variant="contained" color="register">
          Inscription
        </Button>
      </form>
    </div>
  );
}
