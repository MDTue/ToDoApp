package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    private ToDoRepo myToDoRepo;

    public ToDoService(ToDoRepo myToDoRepo){
        this.myToDoRepo = myToDoRepo;
    }

    public List<ToDo> getAllToDo() {
        return myToDoRepo.list();
    }

    public void addToDo(String jobToDo){
        ToDo newToDo = new ToDo(jobToDo, "0");
        myToDoRepo.addToDo(newToDo);

    }
}
