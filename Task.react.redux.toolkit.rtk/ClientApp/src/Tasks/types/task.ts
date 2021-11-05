export type StatusTask =  "toDo" | "inProgress" | "done" | "";

export interface Task{
    name: string;
    description: string;
    duration: string;
    status: StatusTask,
    id: string
}