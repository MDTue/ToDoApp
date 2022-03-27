package de.neuefischeToDoApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class ToDoService {
    private final ToDoRepo myToDoRepo;

    public ToDoService(ToDoRepo myToDoRepo) {
        this.myToDoRepo = myToDoRepo;
    }

    public void addToDo(ToDo jobToDo, String name) {
        jobToDo.setUser(name);
        myToDoRepo.save(jobToDo);
    }

    public void changeStatus(String id, String name) {
        Optional<ToDo> foundToDo = myToDoRepo.findByJobIdAndUser(id, name);
        if (foundToDo.isPresent()) {
            var x = foundToDo.get();
            if (x.getJobStatus().equals(Status.OPEN)) {
                x.setJobStatus(Status.DONE);
            } else {
                x.setJobStatus(Status.OPEN);
            }
            myToDoRepo.save(x);
        }
    }

    public List<ToDo> getOpenToDos(String name) {
        List<ToDo> allToDos = myToDoRepo.findAll();
        return allToDos.stream()
                .filter(y -> y.getUser().equals(name))
                .filter(s -> s.getJobStatus().equals(Status.OPEN))
                .toList();
    }

    public List<ToDo> getAllToDos(String user) {
        List<ToDo> allToDos = myToDoRepo.findAllByUser(user);
        return allToDos;
    }

    public void deleteId(String id, String name) {
        Optional<ToDo> foundToDo = myToDoRepo.findByJobIdAndUser(id, name);
        if (foundToDo.isPresent()) {
            var x = foundToDo.get();
            if (x.getUser().equals(name) && x.getJobId().equals(id)) {
                myToDoRepo.deleteByJobIdAndUser(id, name);
            }

        }

    }
}
