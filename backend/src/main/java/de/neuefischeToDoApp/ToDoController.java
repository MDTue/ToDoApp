package de.neuefischeToDoApp;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin


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
    public List<ToDo> addToDo(@RequestBody ToDo jobToDo){
        toDoService.addToDo(jobToDo);
        return toDoService.getAllToDo();
    }
    @PutMapping ("/{id}")
    public void changeStatus(@PathVariable String id){
        toDoService.changeStatus(id);
    }
    @GetMapping("/allnewToDos")
    public List <ToDo> showNewToDos(){
        return toDoService.getOpenToDos();

    }

    @DeleteMapping("/{id}")
    public void deleteToDo(@PathVariable String id) {toDoService.deleteId(id);
    }


}