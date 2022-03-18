export interface ToDo {
    jobToDo: string;
    jobStatus: string;
    jobId: string;
    description : string;
    user: string;
}


export enum JobStatus{
    Open = 'Open',
    Done = 'Done'
}