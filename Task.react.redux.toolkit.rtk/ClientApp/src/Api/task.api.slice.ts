import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 
import {TASKS_API_BASE_URL} from "../Api/Constants";
import { Task } from '../Tasks/types/task';


export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: TASKS_API_BASE_URL}),
    tagTypes:["Tasks"],
    endpoints: (builder) => ({
        getTasks: builder.query<Task[], void>({
          query: () => `/tasks`,
            providesTags: [{type: "Tasks", id: "LIST"}]
        }),
        getTaskById: builder.query<Task, string>({
            query: (id) => `/tasks/${id}`
        }),
        saveTask: builder.mutation<Task, Task>({
            query(task){
                return{
                    url: `/tasks/`,
                    method: "POST",
                    body: task,
                }
            },
            invalidatesTags: [{type: "Tasks", id: "LIST"}],
        }),
        updateTask: builder.mutation<Task, Task>({
            query(task){
                return {
                    url: `/tasks/${task.id}`,
                    method: "PUT",
                    body: task,
                };
            },
            invalidatesTags: [{type: "Tasks", id: "LIST"}],
        }),
        deleteTask: builder.mutation<Task, Task>({
            query(task) {
                return {
                    url: `/tasks/${task.id}`,
                    method: "DELETE",
                    body: task,
                }
            },
            invalidatesTags: [{type: "Tasks", id: "LIST"}],
        })
    }),
})

export const {useGetTasksQuery, useGetTaskByIdQuery, useUpdateTaskMutation, useSaveTaskMutation, useDeleteTaskMutation} = apiSlice;