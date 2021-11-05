import { Box, Typography } from "@mui/material";

import React from "react";
import { Task } from "../../types/task";
import { ItemTask } from "../ItemTask/ItemTask";

type ListTasksProps = {
  arrayTasks: Task[] | undefined;
};

export const ListTasks: React.FC<ListTasksProps> = (props) => {
  if (props.arrayTasks === undefined) {
    return <Typography variant="body1">There are no tasks</Typography>;
  } else {
    return (
      <Box sx={{ display: "flex", p: 1, flexWrap: "wrap", gap: "1rem" }}>
      
          {props.arrayTasks.map((task) => {
            return(
              <ItemTask task={task} key={task.id}></ItemTask>
            )
          })}
      </Box>
    );
  }
};
