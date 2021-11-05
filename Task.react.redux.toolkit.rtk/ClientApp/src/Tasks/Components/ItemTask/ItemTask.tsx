import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { blue } from "@mui/material/colors";
import { Task } from "../../types/task";
import { useHistory } from "react-router";

type ItemTaskProps = {
  task: Task;
};

export const ItemTask: React.FC<ItemTaskProps> = (props) => {
  const history = useHistory();

  return (
    <Card sx={{ flexGrow: 1, maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
            {props.task.id}
          </Avatar>
        }
        title={props.task.name}
        subheader={`Duration: ${props.task.duration}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.task.description}
        </Typography>

        {props.task.status === "toDo" ? (
          <Typography variant="body1" color="coral">
            To do
          </Typography>
        ) : props.task.status === "inProgress" ? (
          <Typography variant="body1" color="lightseagreen">
            In progress
          </Typography>
        ) : (
          <Typography variant="body1" color="limegreen">
            Done
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <IconButton 
          color="secondary"
          onClick={() => {
                 
                  history.push({
                    pathname: `/editTask/${props.task.id}`,
                  });
                }}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
