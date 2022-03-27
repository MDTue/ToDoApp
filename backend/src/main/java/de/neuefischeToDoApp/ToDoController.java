package de.neuefischeToDoApp;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/todos")

public class ToDoController {

    private final ToDoService toDoService;
    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }


    @GetMapping
    public List<ToDo> getAllToDo(Principal principal){
        return toDoService.getAllToDos(principal.getName());
    }

    @PostMapping
    public List<ToDo> addToDo(@RequestBody ToDo jobToDo , Principal principal){
        toDoService.addToDo(jobToDo, principal.getName());
        return toDoService.getAllToDos(principal.getName());
    }
    @PutMapping ("/{id}")
    public void changeStatus(@PathVariable String id, Principal principal){
        toDoService.changeStatus(id, principal.getName());
    }

    @GetMapping("/allnewToDos")
    public List <ToDo> showNewToDos(Principal principal){
        return toDoService.getOpenToDos(principal.getName());
    }

    @DeleteMapping("/{id}")
    public void deleteToDo(@PathVariable String id, Principal principal) {toDoService.deleteId(id, principal.getName());
    }


}