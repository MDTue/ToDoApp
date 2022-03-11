import {useCallback, useEffect, useState} from "react";
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

    const fetchAll = useCallback (() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`)
            .then(response => {
                console.log(response.status)
                if (response.status===200) {
                    return response.json()
                }
                throw new Error('NotFound')
            })
            .then((toDosFromBackend: Array<ToDo>) => setToDos(toDosFromBackend))
            .catch(e  => {
                console.error(e.message)
                setErrorMessage(e.message)
            })
    },[])
    const deleteChecked = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todos`, {method: 'DELETE'})
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                throw new Error('NotFound')
            })
            .then((toDosFromBackend: Array<ToDo>) => setToDos(toDosFromBackend))
            .catch(e  => setErrorMessage(e.errorMessage))
    }

    useEffect(() => {
        fetchAll();
    },[fetchAll]);

    return(

        <div className="todolist">
            <Link to={'/todolist'}> ToDoListe </Link>
            {t(errorMessage)}
            <div>
                <ToDoForm onToDoCreation={setToDos}/>
            </div>
            <div className="header">
                <h1> ToDo App</h1>
            </div >
            <div >
                {/*  // <button onClick={deleteChecked}>{t('DeleteSelected')}</button> */}

                <ul>
                    {toDos.length>0 && toDos.map(todo => <li data-testid="todolist" className="spalte1" key={todo.jobId}><ToDoItem todo={todo} onToDoDeletion={fetchAll} onToDoChange={setToDos} /></li>)}
                </ul>
            </div>
        </div>

    )
}