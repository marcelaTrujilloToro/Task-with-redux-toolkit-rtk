import { Grid, Typography } from '@mui/material';
import React from 'react'
import { Form } from '../../Components/Form/Form';
import { useParams } from 'react-router';

interface FormEditParams{
    id: string
}

const EditTask = () => {

    const {id} = useParams<FormEditParams>();


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
          {/* <Form
            task={{
              name: task.name,
              description: task.description,
              duration: task.duration,
              status: task.status,
              id: task.id,
            }}
            option="edit"
          /> */}
        </Grid>
      </Grid>
    </>
    )
};
export default EditTask;
