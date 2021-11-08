import { Grid, Typography } from "@mui/material";
import React from "react";
import { Form } from "../../Components/Form/Form";
import { useParams } from "react-router";
import { useGetTaskByIdQuery } from "../../../Api/task.api.slice";

interface FormEditParams {
  id: string;
}

const EditTask = () => {
  const { id } = useParams<FormEditParams>();

  const { data } = useGetTaskByIdQuery(id);

  return (
    <>
      <Typography variant="h4">Edit task</Typography>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          {data && (
            <Form
              task={{
                name: data.name,
                description: data.description,
                duration: data.duration,
                status: data.status,
                id: data.id,
              }}
              option="edit"
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default EditTask;
