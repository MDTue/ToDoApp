import {useEffect, useState} from "react";
import {ToDo} from "./model";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import {useTranslation} from 'react-i18next';


export default function ToDoList() {
    const {t} = useTranslation();
    const[toDos, setToDos] = useState([] as Array<ToDo>);
    const[errorMessage, setErrorMessage] = useState('');

    const fetchAll = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`)
            .then(response => {
                if (response.status===200) {
                    return response.json()
                }
                throw new Error(t('NotFound'))
            })
            .then((toDosFromBackend: Array<ToDo>) => setToDos(toDosFromBackend))
            .catch(e  => setErrorMessage(e.errorMessage))
    }
    const deleteChecked = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`, {method: 'DELETE'})
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                throw new Error(`{t('NotFound')}`)
            })
            .then((toDosFromBackend: Array<ToDo>) => setToDos(toDosFromBackend))
            .catch(e  => setErrorMessage(e.ErrorMessage))
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
                <button onClick={deleteChecked}>{t('DeleteSelected')}</button>
            </div>
            <ul>
                {toDos.length>0 && toDos.map(todo => <li key={todo.jobId}><ToDoItem todo={todo} onToDoDeletion={fetchAll} onToDoChange={setToDos} /></li>)}
            </ul>
        </div>
    )
}