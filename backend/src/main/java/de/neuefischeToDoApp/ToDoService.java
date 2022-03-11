package de.neuefischeToDoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoService {
    private final ToDoRepo myToDoRepo;


    public ToDoService(ToDoRepo myToDoRepo){
        this.myToDoRepo = myToDoRepo;
    }

    public List<ToDo> getAllToDo() {
        return myToDoRepo.findAll();
    }

    public void addToDo(ToDo jobToDo){
        myToDoRepo.save(jobToDo);
    }
    public void changeStatus(String id) {
        ToDo todo1 = myToDoRepo.findById(id).get();
        todo1.setJobStatus(Status.OPEN);
        myToDoRepo.save(todo1);
    }
    public List<ToDo> getOpenToDos() {
        List<ToDo> allToDos = myToDoRepo.findAll();
        return allToDos.stream()
                .filter(s->s.getJobStatus().equals(Status.OPEN))
                .toList();
    }
    public List<ToDo> getAllToDos() {
        List<ToDo> allToDos = myToDoRepo.findAll();
        return allToDos;
    }

    public void deleteId(String id) {
        myToDoRepo.deleteById(id);
    }
}
