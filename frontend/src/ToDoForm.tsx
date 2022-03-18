import {ToDo} from "./model";
import {useEffect, useState} from "react";
import {useTranslation} from 'react-i18next';
import './ToDoForm.css';


interface ToDoFromProps {
    onToDoCreation: (todos: Array<ToDo>) => void;
}

export default function ToDoForm(props: ToDoFromProps){
    const {t} = useTranslation();
    const[task, setTask] = useState(localStorage.getItem('task') ?? '');
    const[description, setDescription] = useState(localStorage.getItem('description') ?? '');
    const[token, setToken] = useState(localStorage.getItem('token') ?? '');
    const[errorMessage, setErrorMessage] = useState('');

    const addTask = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                jobToDo: task,
                description: description,
                token: token
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
        localStorage.setItem('description',description);
    }, [task, description]);


    return(
        <div className={'toDoForm'}>
            {t(errorMessage)};

            <input className={'form_task'} type="text" placeholder={t('Aufgabe')} value ={task} onChange={ev => setTask(ev.target.value)}/>
            <input className={'form_desc'} type="text" placeholder={t('Beschreibung')} value={description} onChange={ev => setDescription(ev.target.value)} />
            <button onClick={addTask}>  {t('Senden')}</button>
        </div>
    )
}