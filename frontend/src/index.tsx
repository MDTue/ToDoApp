import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import ToDoList from "./ToDoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="Loading..">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path= "/register" element={<Register/>}/>
                    <Route path= "/toDoList" element={<ToDoList/>}/>
                    <Route path='*' element={<App />} />
                </Routes>
            </BrowserRouter>

        </Suspense>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
