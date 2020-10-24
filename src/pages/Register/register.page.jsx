import React from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  Button,
  Grid,
  InputLabel,
  FormControl,
} from "@material-ui/core";

const RegisterPage = () => {
  const history = useHistory();
  return (
    <div>
      <h1>
        Register{" "}
        <span role="img" aria-label="emoji">
          🔏
        </span>
      </h1>

      <form>
        <Grid container spacing={3}>
          <Grid container item direction="column" spacing={2}>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="email-address-input">
                  Email address
                </InputLabel>
                <Input
                  type="email"
                  id="email-address-input"
                  aria-describedby="my-helper-text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <Input
                  type="email"
                  id="name-input"
                  aria-describedby="my-helper-text"
                  required
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <Input
                  type="password"
                  id="password-input"
                  aria-describedby="my-helper-text"
                  required
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container justify="center" item>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
            <Button variant="contained" onClick={() => history.push("/login")}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterPage;
