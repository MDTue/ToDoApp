package de.neuefischeToDoApp;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    private ToDoRepo myToDoRepo;

    public ToDoService(ToDoRepo myToDoRepo){
        this.myToDoRepo = myToDoRepo;
    }

    public ToDoService() {
    }

    public List<ToDo> getAllToDo() {
        return myToDoRepo.list();
    }

    public void addToDo(String jobToDo){
        ToDo newToDo = new ToDo(jobToDo, "0");
        myToDoRepo.addToDo(newToDo);
    }

    public void changeStatus(String id) {
        ToDo idToChange = myToDoRepo.get(id);
        idToChange.setJobStatus("1");
    }


    public List<ToDo> getOpenToDos() {
         List<ToDo> allToDos = myToDoRepo.list();
         return allToDos.stream()
                 .filter(s->s.getJobStatus().equals("0"))
                 .toList();
    }

    public List<ToDo> getAllToDos() {
        List<ToDo> allToDos = myToDoRepo.list();
        return allToDos;
    }
}
