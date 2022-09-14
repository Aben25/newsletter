import React, { Component } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  AppBar,
  TextField,
  Button,
  toolbar,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from '../App';

export default function Form() {

    const {   setData, data } = useContext(UserContext);

    const chandler = (e) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
e.preventDefault();    };

  return (
    <div>
      <div>
        <AppBar position="static">
          <h1>SIGNIN FORM </h1>
        </AppBar>
        <FormControl>
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Name"
            variant="outlined"
            onChange={(e) => setData({ name: e.target.value })}
          />
          <br />
          <TextField
            style={{ width: "200px", margin: "5px" }}
            type="text"
            label="Email"
            variant="outlined"
            onChange={(e) => setData({ email: e.target.value })}
          />
          <br />
          <Button variant="contained" color="primary"
          onClick={() => chandler(event)}>
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
