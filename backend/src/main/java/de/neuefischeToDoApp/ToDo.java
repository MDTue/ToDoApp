package de.neuefischeToDoApp;

import java.util.UUID;

public class ToDo {
    String jobToDo;
    String jobStatus;
    String jobId;

    public ToDo(String jobToDo, String jobStatus) {
        this.jobToDo = jobToDo;
        this.jobStatus = jobStatus;
        this.jobId = UUID.randomUUID().toString();
    }

    public ToDo() {
        this.jobId = UUID.randomUUID().toString();
    }

    public String getJobId(){
        return jobId;
    }

    public void setJobId(java.lang.String jobId) {
        this.jobId = jobId;
    }

    public String getJobToDo() {
        return jobToDo;
    }

    public void setJobToDo(String jobToDo) {
        this.jobToDo = jobToDo;
    }

    public String getJobStatus() {
        return jobStatus;
    }

    public void setJobStatus(String jobStatus) {
        this.jobStatus = jobStatus;
    }
}
