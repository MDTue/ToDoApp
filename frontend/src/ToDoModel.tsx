import exp from "constants";

export interface ToDoProps {
    jobToDo: string;
    jobStatus: string;
    jobId: string;
}
export interface Response{
    results: Array<ToDoProps>;
}


export interface ReponseBody {
    results : Array<ToDoProps>;
}