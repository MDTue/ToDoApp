import {JobStatus, ToDo} from "./model";
import './ToDoItem.css'
import {useTranslation} from 'react-i18next';
import {useState} from "react";

interface ToDoItemProps {
    todo: ToDo
    onToDoDeletion: () => void;
    onToDoChange : (todos: Array<ToDo>) => void;
}

export default function ToDoItem(props: ToDoItemProps) {
    const {t} = useTranslation();
    const[errorMessage, setErrorMessage] = useState('');


    const deleteToDo = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}${props.todo.jobId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.status===200) {
                    return response.json()
                }
                throw new Error(`{t('NotFound')}`)
            })
            .then(() => props.onToDoDeletion())
            .catch(e  => setErrorMessage(e.message))
    };
    const toggle = () => {
        const newStatus = props.todo.jobStatus === JobStatus.Open ? JobStatus.Done : JobStatus.Open;

        fetch(`${process.env.REACT_APP_BASE_URL}/todos/${props.todo.jobId}`, {
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
            .then(response => {
                if (response.status===200) {
                    return response.json()
                }
                throw new Error(`{t('NotFound')}`)
            })
            .then(response => response.json())
            .then((toDosFromBackend: Array<ToDo>) => props.onToDoChange(toDosFromBackend))
            .catch(e  => setErrorMessage(e.message))
    }

    return(
        <div>
            <span className={props.todo.jobStatus === JobStatus.Done ? 'selected': ''} onClick={toggle}>{props.todo.jobToDo} - {props.todo.description}</span> <button onClick={deleteToDo}>{t('Delete')}</button>

        </div>
    )
}