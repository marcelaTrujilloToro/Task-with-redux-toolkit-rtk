import { Alert, Typography } from '@mui/material';
import React from 'react'
import { useGetTasksQuery } from '../../../Api/task.api.slice';
import { ListTasks } from '../../Components/ListTasks/ListTasks';


const ViewTasks = () => {

    const { data, isLoading, isError} = useGetTasksQuery();

    if (isError) {
        return (
            <Alert severity="error">Error loading tasks</Alert>
        )
    }

    if (isLoading) {
        return (
            <Alert severity="info">Loading tasks...</Alert>
        )
    }

    return (
        <div>
            <Typography variant="h4">View tasks</Typography>
            <ListTasks arrayTasks={data}></ListTasks>
        </div>
    )
};
export default ViewTasks;