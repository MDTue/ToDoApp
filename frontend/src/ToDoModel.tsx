import exp from "constants";
import {useEffect, useState} from "react";

export interface ToDoProps {
    jobToDo: string;
    jobStatus: string;
    jobId: string;
}
export interface Response{
    results: Array<ToDoProps>;
}


export interface ReponseBody {
    results : Array<ToDoProps>;
}

export default function TodoList() {
    const [todos, setTodos] = useState([] as Array<ToDoProps>);

    useEffect(() => {
        fetch('http://localhost:8080/todos')
            .then(response => response.json())
            .then((todoItems: Array<ToDoProps>) => setTodos(todoItems));
    }, []);

    // @ts-ignore
    return (
        <div>
            { todos.map(todo => <TodoItem key={todo.jobId} todo={todo} onItemChange={setTodos} />)}
        </div>
    );
}

export interface TodoItemProps {
    todo: ToDoProps;
    onItemChange: (todos: Array<ToDoProps>) => void
}

export function TodoItem(props: TodoItemProps) {
    const deleteTodo = () => {
        fetch(`http://localhost:8080/todos/${props.todo.jobId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then((todos: Array<ToDoProps>) => props.onItemChange(todos));
    }
    return (
        <div>
            <span>{props.todo.jobToDo}</span> <button onClick={() => deleteTodo()}>Löschen</button>
        </div>
    );
}

export function AddTodo(props: TodoItemProps) {
    const addTodo = () => {
        fetch(`http://localhost:8080/todos/${props.todo.jobId}`, {method: 'PUT'})
            .then(response => response.json())
            .then((todos: Array<ToDoProps>) => props.onItemChange(todos));
    }
}

export function TodoItemChangeStatus(props: TodoItemProps) {
    const changeTodoStatus = () => {
        fetch(`http://localhost:8080/todos/${props.todo.jobId}`, { method: 'PUT' })
            .then(response => response.json())
            .then((todos: Array<ToDoProps>) => props.onItemChange(todos));
    }
    return (
        <div>
            <span>{props.todo.jobToDo}</span> <button onClick={() => changeTodoStatus()}>Status ändern</button>
        </div>
    );
}