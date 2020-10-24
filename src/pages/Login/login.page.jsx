import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Input,
  Button,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import "./login.style.scss";

const LoginPage = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Login</h1>

      <form>
        <Grid container spacing={3}>
          <Grid container item direction="column" spacing={1}>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input
                  type="email"
                  id="my-input"
                  aria-describedby="my-helper-text"
                  required
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input
                  type="password"
                  id="my-input"
                  aria-describedby="my-helper-text"
                  required
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container justify="center" item>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => history.push("/register")}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginPage;
