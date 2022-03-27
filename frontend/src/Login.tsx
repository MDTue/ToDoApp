
import './Login.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import OnLogout from "./OnLogout";


export default function Login() {
    const [loginName, setLoginName] = useState('')
    const [loginPW, setLoginPW] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const nav = useNavigate()

    OnLogout()

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
                throw new Error("Unbekannter Loginname. Bitte zuerst registrieren!")
            })
            .then (response=>{
                localStorage.setItem('token',response.token)
                nav("/toDoList")
            })

            .catch(e=> setErrorMessage(errorMessage));
             nav("/register")
    }


return(
    <div>
        <div className="login">
            <div className="header">
                <h1> Login für angemeldete User</h1>
            </div>

            <div>
                <input className={'form_task'} type="email" placeholder={"E-Mail"} value ={loginName} onChange={ev => setLoginName(ev.target.value)}/>
                <input className={'form_desc'} type="password" placeholder={"Passwort"} value={loginPW} onChange={ev => setLoginPW(ev.target.value)} />
                <button onClick={loginUser}>  Anmelden </button>

            </div>
        </div>
    </div>
)
}