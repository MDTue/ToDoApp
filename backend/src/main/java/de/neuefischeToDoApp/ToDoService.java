package de.neuefischeToDoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    private final ToDoRepo myToDoRepo;
    @Autowired
    public ToDoService(ToDoRepo myToDoRepo){
        this.myToDoRepo = myToDoRepo;
    }

    public List<ToDo> getAllToDo() {
        return myToDoRepo.list();
    }
    public void addToDo(ToDo jobToDo){
        myToDoRepo.addToDo(jobToDo);
    }
    public void changeStatus(String id) {
        ToDo idToChange = myToDoRepo.get(id);
        idToChange.setJobStatus(Status.OPEN);
    }
    public List<ToDo> getOpenToDos() {
        List<ToDo> allToDos = myToDoRepo.list();
        return allToDos.stream()
                .filter(s->s.getJobStatus().equals(Status.OPEN))
                .toList();
    }
    public List<ToDo> getAllToDos() {
        List<ToDo> allToDos = myToDoRepo.list();
        return allToDos;
    }

    public void deleteId(String id) {
        ToDo idToDelete = myToDoRepo.get(id);
        myToDoRepo.idToDelete(id);
    }
}
