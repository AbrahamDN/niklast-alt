import React from "react";
import { Input, Button } from "@material-ui/core";

const Homepage = () => {
  return (
    <div>
      <h1>Niklast 🚀</h1>
      <Input defaultValue="Goal" placeholder="Add a goal" />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
};

export default Homepage;
