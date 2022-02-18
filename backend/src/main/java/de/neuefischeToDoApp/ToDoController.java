package de.neuefischeToDoApp;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")

public class ToDoController {

    private final ToDoService toDoService;

    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }
    @GetMapping
    public List<ToDo> getAllToDo(){
        return toDoService.getAllToDo();
    }

    @PostMapping
    public void addToDo(@RequestBody String jobToDo){
        toDoService.addToDo(jobToDo);
    }

    @PutMapping ("/{id}")
    public void changeStatus(@PathVariable String id){
        toDoService.changeStatus(id);
    }

    @GetMapping("/allnewToDos")
    public List <ToDo> showNewToDos(){
        return toDoService.getOpenToDos();

    }

}
