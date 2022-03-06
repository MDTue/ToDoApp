import {ToDo} from "./model";
import {useEffect, useState} from "react";
import './ToDoForm.css'
import {useTranslation} from 'react-i18next';


interface ToDoFromProps {
    onToDoCreation: (todos: Array<ToDo>) => void;
}

export default function ToDoForm(props: ToDoFromProps){
    const {t} = useTranslation();
    const[task, setTask] = useState(localStorage.getItem('task') ?? '');
    const[description, setDescription] = useState(localStorage.getItem('despcription') ?? '');
    const[errorMessage, setErrorMessage] = useState('');

    const addTask = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jobToDo: task,
                description: description
            })
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                throw new Error(t('NotFound'))
            })
            .then((toDosFromBackend: Array<ToDo>) => {
                setTask('');
                setDescription('');
                props.onToDoCreation(toDosFromBackend);
            })
            .catch(e=> setErrorMessage(e.message));
    }
    useEffect(() => {
        localStorage.setItem('task',task);
    }, []);

    useEffect(() => {
        localStorage.setItem('description',description);
    }, []);

    return(
        <div>

            <input type="text" placeholder={t('Aufgabe')} value ={task} onChange={ev => setTask(ev.target.value)}/>
            <input type="text" placeholder={t('Beschreibung')} value={description} onChange={ev => setDescription(ev.target.value)} className="description-field"/>
            <button onClick={addTask}>{t('Senden')}</button>
        </div>
    )
}