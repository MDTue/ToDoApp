import {ToDo} from "./model";
import {useState} from "react";
import './ToDoForm.css'


interface ToDoFromProps {
    onToDoCreation: (todos: Array<ToDo>) => void;
}

export default function ToDoForm(props: ToDoFromProps){
    const[task, setTask] = useState('');
    const[description, setDescription] = useState('');

    const addTask = () => {
        fetch('http://localhost:8080/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jobToDo: task,
                description: description
            })
        })
            .then(response => response.json())
            .then((toDosFromBackend: Array<ToDo>) => {
                setTask('');
                setDescription('');
                props.onToDoCreation(toDosFromBackend);
            });
    }
    return(
        <div>
            <input type="text" placeholder="Aufgabe" value ={task} onChange={ev => setTask(ev.target.value)}/>
            <input type="text" placeholder="Beschreibung" value={description} onChange={ev => setDescription(ev.target.value)} className="description-field"/>
            <button onClick={addTask}>Senden</button>
        </div>
    )
}