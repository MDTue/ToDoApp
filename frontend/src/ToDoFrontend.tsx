import {useEffect, useState} from "react";
import {ToDoProps, Response as ResponseBody} from './ToDoModel';

export default function ToDoFrontEnd() {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([] as Array<ToDoProps>);
    const [urlDown, setUrlDown] = useState('');

    const fetchData = (url: string= 'http://localhost:8080/todo',) => {
        fetch(url)
            .then(response => response.json())
            .then((responseBody: Array<ToDoProps>) => {
                setItems(responseBody);
            });
        }

        useEffect(() => {
            fetchData()
        }, []);

        return (
            <div>
                <h1> ToDo App</h1>
                <div id="landingPage">

                  <button onClick={() => fetchData('http://localhost:8080/todo/allnewToDos')}>Alle neuen</button>
                  <button onClick={() => fetchData('http://localhost:8080/todo')}>Alle</button>
                    {items.map(items=><p>{items.jobToDo} </p>)}
                    {items.map(items=><p>{items.jobStatus} </p>)}


                </div>
            </div>
        )



    }
