import {useEffect, useState} from "react";
import TodoList, {ToDoProps, Response as ResponseBody, TodoItem, TodoItemProps, AddTodo} from './ToDoModel';

export default function ToDoFrontEnd() {
    const [search, setSearch] = useState('');
    const [todos, setTodos] = useState([] as Array<ToDoProps>);


    const fetchData = (url: string= 'http://localhost:8080/todo',) => {
        fetch(url)
            .then(response => response.json())
            .then((responseBody: Array<ToDoProps>) => {
                setTodos(responseBody);
            });
        }

        useEffect(() => {
            fetchData()
        }, []);



    return (
            <div>
                <h1> ToDo App</h1>
                <div id="landingPage">

                  <button onClick={() => fetchData('http://localhost:8080/todo/allnewToDos')}>Alle neuen ToDos </button>
                  <button onClick={() => fetchData('http://localhost:8080/todo')}>Alle ToDos</button>
                  <button onClick={() => AddTodo}>Neues ToDo</button>

                    { todos.map(todo => <TodoItem key={todo.jobId} todo={todo} onItemChange={setTodos} />)}


                </div>
            </div>
        )



    }
