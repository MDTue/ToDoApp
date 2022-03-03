import {useEffect, useState} from "react";
import {ToDo} from "./model";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";


export default function ToDoList() {
    const[toDos, setToDos] = useState([] as Array<ToDo>);
    const fetchAll = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`)
            .then(response => response.json())
            .then((toDosFromBackend: Array<ToDo>) => setToDos(toDosFromBackend));
    }
    const deleteChecked = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`, {method: 'DELETE'})
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
            <h1> ToDo App</h1>

            <div>
                <button onClick={deleteChecked}>Alle abgehakten löschen</button>
            </div>
            <ul>
                {toDos.map(todo => <li key={todo.jobId}><ToDoItem todo={todo} onToDoDeletion={fetchAll} onToDoChange={setToDos} /></li>)}
            </ul>
        </div>
    )
}