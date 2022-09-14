import React, { Component } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  AppBar,
  TextField,
  Button,
} from "@mui/material";
class Form extends Component {
    render() {
        return (
          <div>
            <AppBar position="static">
              <toolbar>
                <h1>SIGNIN FORM </h1>
              </toolbar>
            </AppBar>
            <FormControl>
              <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Name"
                variant="outlined"
              />
              <br />
              <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Email"
                variant="outlined"
              />
              <br />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </FormControl>
          </div>
        );
    }
}

export default Form;