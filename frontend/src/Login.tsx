
import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const [loginName, setLoginName] = useState('')
    const [loginPW, setLoginPW] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const nav = useNavigate()

    const loginUser = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: loginName,
                password: loginPW
            })
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                throw new Error("NotFound")
            })
            .then (response=>{
                localStorage.setItem('token',response.token)
                nav("/toDoList")
            })

            .catch(e=> setErrorMessage(e.message));
    }


return(
    <div className="login">
        <Link to={'login'}>Login</Link>
        <div className="header">
            <h1> Login für angemeldete User</h1>
        </div>
        {errorMessage}
        <div>
            <input className={'form_task'} type="email" placeholder={"E-Mail"} value ={loginName} onChange={ev => setLoginName(ev.target.value)}/>
            <input className={'form_desc'} type="password" placeholder={"Passwort"} value={loginPW} onChange={ev => setLoginPW(ev.target.value)} />
            <button onClick={loginUser}>  Anmelden </button>

        </div>
    </div>
)
}