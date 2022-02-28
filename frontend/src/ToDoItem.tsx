import {JobStatus, ToDo} from "./model";
import './ToDoItem.css'

interface ToDoItemProps {
    todo: ToDo
    onToDoDeletion: () => void;
    onToDoChange : (todos: Array<ToDo>) => void;
}

export default function ToDoItem(props: ToDoItemProps) {
    const deleteToDo = () => {
        fetch('http://localhost:8080/todos/${props.todo.jobId}', {
            method: 'DELETE'
        })
            .then(() => props.onToDoDeletion());
    };
    const toggle = () => {
        const newStatus = props.todo.jobStatus === JobStatus.Open ? JobStatus.Done : JobStatus.Open;

        fetch('https://localhost:8080/todos/${props.todo.jobId}', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jobId: props.todo.jobId,
                jobToDo : props.todo.jobToDo,
                description: props.todo.description,
                jobStatus: newStatus
            })
        })
            .then(response => response.json())
            .then((toDosFromBackend: Array<ToDo>) => props.onToDoChange(toDosFromBackend));
    }

    return(
        <div>
            <span className={props.todo.jobStatus === JobStatus.Done ? 'selected': ''} onClick={toggle}>{props.todo.jobToDo} - {props.todo.description}</span> <button onClick={deleteToDo}>Löschen</button>
        </div>
    )
}