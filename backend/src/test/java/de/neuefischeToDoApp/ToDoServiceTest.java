package de.neuefischeToDoApp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/*
class ToDoServiceTest {

    @Autowired
    @MockBean
    ToDoService toDoService;
    @Test
     void shouldListAllToDo(){

        List<ToDoService> toDo = List.of(new ToDoService(),new ToDoService());
        ToDoService toDoServiceMock = mock(ToDoService.class);
        when(toDoServiceMock.getAllToDos()).thenReturn(Optional.of(new ToDoService("01","Putzen")));

        ToDoService toDoServiceMock = new ToDoService(Mock);
        List<ToDo> result = toDoServiceMock.getAllToDos();
        assertEquals(allToDos, result);
    }


    @Autowired
    @MockBean
    ToDoRepo toDoRepo;
    @Test
    void shouldGetToDo(){
        ToDoRepo toDoRepo = new ToDoRepo();
        ToDoRepo repoMock = mock(ToDoRepo.class);
        when(repoMock.get("01").thenReturn(Optional.of(new ToDo("Putzen","0"));

        ToDoService toDoServiceMock = new ToDoService((dbMock));
        ToDo result = toDoService.getAllToDo().get("Putzen","0");
        assertEquals(toDo, result);


    }

    @Test
    void shouldSetStatus(){

    }

}

*/