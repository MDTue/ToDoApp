export interface ToDo {
    jobToDo: string;
    jobStatus: string;
    jobId: string;
    description : string;
}


export enum JobStatus{
    Open = 'Open',
    Done = 'Done'
}