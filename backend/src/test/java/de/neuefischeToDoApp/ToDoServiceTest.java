package de.neuefischeToDoApp;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

class ToDoServiceTest {

    @Test
    void shouldAddToDo(){
        ToDo todo = new ToDo();
        ToDoRepo dbMock = mock(ToDoRepo.class);

        ToDoService toDoService = new ToDoService(dbMock);
        toDoService.addToDo(todo, "kk");

        verify(dbMock).save(todo);
    }

    @Test
    void shouldGetAllToDos(){
        // GIVEN
       ToDo todo1 = new ToDo();
       todo1.setJobToDo("Putzen");
       ToDo todo2 = new ToDo();
       todo2.setJobToDo("Einkaufen");
       ToDo todo3 = new ToDo();
       todo3.setJobToDo("Gassi gehen");
       List<ToDo> allToDos = List.of(todo1,todo2,todo3);
       List<ToDo> expectedToDos = List.of(todo1, todo2, todo3);
       ToDoRepo dbMock = mock(ToDoRepo.class);
       // WHEN
       when(dbMock.findAll()).thenReturn(allToDos);
       // THEN
       assertEquals(expectedToDos,allToDos);
    }

    @Test
    void shouldDeleteById(){
        // GIVEN
        ToDoRepo dbMock = mock(ToDoRepo.class);
        ToDoService toDoService = new ToDoService(dbMock);
        // WHEN
        toDoService.deleteId("01","KK");
        //THEN
        verify(dbMock).deleteById("01");    // verify testet, ob die Funktion deleteById aufgerufen wurde
    }
}

