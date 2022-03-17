package de.neuefischeToDoApp;

import java.util.UUID;

public class ToDo {
    String jobToDo;
    Status jobStatus;
    String jobId;
    String description;
    String user;

    public ToDo(String jobToDo, Status jobStatus) {
        this.jobToDo = jobToDo;
        this.jobStatus = jobStatus;
        this.jobId = UUID.randomUUID().toString();
        this.user = user;
          }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Status getJobStatus() {
        return jobStatus;
    }

    public void setJobStatus(Status jobStatus) {
        this.jobStatus = jobStatus;
    }
}
