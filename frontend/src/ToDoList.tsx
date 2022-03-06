import {useEffect, useState} from "react";
import {ToDo} from "./model";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import './ToDoList.css';


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
            .catch(e  => setErrorMessage(e.errorMessage))
    }

    useEffect(() => {
        fetchAll();
    },[]);

    return(
        <Link to={'/todolist'}>
        <div className="todolist">
            <div>
                <ToDoForm onToDoCreation={setToDos}/>
            </div>
            <div className="header">
                <h1> ToDo App</h1>
            </div >
            <div >
                {/*  // <button onClick={deleteChecked}>{t('DeleteSelected')}</button> */}

                <ul>
                    {toDos.length>0 && toDos.map(todo => <li className="spalte1" key={todo.jobId}><ToDoItem todo={todo} onToDoDeletion={fetchAll} onToDoChange={setToDos} /></li>)}
                </ul>
            </div>
        </div>
        </Link>
    )
}