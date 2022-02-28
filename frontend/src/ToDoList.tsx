import {useEffect, useState} from "react";
import {ToDo} from "./model";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";


export default function ToDoList() {
    const[toDos, setToDos] = useState([] as Array<ToDo>);
const fetchAll = () => {
    fetch('http://localhost:8080/todos')
        .then(response => response.json())
        .then((toDosFromBackend: Array<ToDo>) => setToDos(toDosFromBackend));
}
const deleteChecked = () => {
    fetch('http://localhost:8080/todos', {method: 'DELETE'})
        .then(response => response.json())
        .then((toDosFromBackend: Array<ToDo>) => setToDos(toDosFromBackend));
}

useEffect(() => {
    fetchAll();
    },[]);

return(
    <div className="todo-list">
        <div>
            <ToDoForm onToDoCreation={setToDos}/>
        </div>
        <div>
        <button onClick={deleteChecked}>Alle abgehakten löschen</button>
        </div>
        <ul>
            {toDos.map(todo => <li key={todo.jobId}><ToDoItem todo={todo} onToDoDeletion={fetchAll} onToDoChange={setToDos} /></li>)}
        </ul>
        </div>
)
}
