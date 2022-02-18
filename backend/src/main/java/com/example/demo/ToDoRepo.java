package com.example.demo;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class ToDoRepo {
    private final HashMap<String,ToDo> allMyJobs;
    public ToDoRepo() {allMyJobs = new HashMap<>();}
    public List<ToDo> list() {return allMyJobs.values().stream().toList();}

    public ToDo get(String whichJobId){
        return allMyJobs.get(whichJobId);
    }


    public HashMap<String, ToDo> getAllMyJobs() {
        return allMyJobs;
    }

    public void addToDo(ToDo newToDo){
        allMyJobs.put(newToDo.getJobId(),newToDo);
    }
}
