import { Grid, Typography } from "@mui/material";
import React from "react";
import { Form } from "../../Components/Form/Form";



const CreateTasks = () => {

  return (
    <>
      <Typography variant="h4">Create task</Typography>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Form
            task={{
              name: "",
              description: "",
              duration: "",
              status: "",
              id: ""
            }}
            option="create"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default CreateTasks;
