import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { StatusTask, Task } from "../../types/task";
import { useForm } from "react-hook-form";
import { useSaveTaskMutation, useUpdateTaskMutation } from "../../../Api/task.api.slice";

interface FormProps {
  task: Task;
  option: string
}

export const Form: React.FC<FormProps> = (props) => {

  const [data, setData] = useState(props.task);

  const [updateTask] = useUpdateTaskMutation();

  const[saveTask] = useSaveTaskMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onFieldChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    if (props.option === "create") {
      saveTask(data);
    }else if(props.option === "edit"){
      updateTask(data);
    }
  };


  return (
    <>
      <Card sx={{ flexGrow: 1 }}>
        <CardContent>
          <form onSubmit={handleSubmit(submitForm)}>
            <TextField
              label="ID"
              {...register("id", {
                required: "This is required",
                minLength: {
                  value: 1,
                  message: "You must exceed 1 characters",
                },
              })}
              helperText={errors.id && errors.id.message}
              fullWidth
              variant="filled"
              value={data.id}
              onChange={onFieldChange}
            />
            <br />
            <br />
            <TextField
              label="Name"
              {...register("name", {
                required: "This is required",
                minLength: {
                  value: 3,
                  message: "You must exceed 3 characters",
                },
              })}
              helperText={errors.name && errors.name.message}
              fullWidth
              variant="filled"
              value={data.name}
              onChange={onFieldChange}
            />
            <br />
            <br />

            <TextField
              label="Description"
              {...register("description", {
                required: "This is required",
                minLength: {
                  value: 3,
                  message: "You must exceed 3 characters",
                },
              })}
              multiline
              rows={3}
              variant="filled"
              fullWidth
              helperText={errors.description && errors.description.message}
              value={data.description}
              onChange={onFieldChange}
            />

            <br />
            <br />

            <TextField
              label="Duration"
              {...register("duration", {
                valueAsNumber: true,
                required: "This is required",
                minLength: {
                  value: 1,
                  message: "This field can not be blank",
                },
              })}
              variant="filled"
              fullWidth
              type="number"
              helperText={errors.duration && errors.duration.message}
              value={data.duration}
              onChange={onFieldChange}
            />
            <br />
            <br />

            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register("status", { required: "This is required" })}
              variant="filled"
              fullWidth
              displayEmpty
              value={data.status}
              onChange={onFieldChange}
            >
              <MenuItem disabled value="">
                <em>Status</em>
              </MenuItem>
              <MenuItem value="toDo">To do</MenuItem>
              <MenuItem value="inProgress">In progress</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
            <FormHelperText>
              {errors.status && errors.status.message}
            </FormHelperText>
            <br />
            <br />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              Save task
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

type FormValues = {
  name: string;
  duration: number;
  description: string;
  status: StatusTask;
  id: string;
};
