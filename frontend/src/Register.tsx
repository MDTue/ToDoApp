import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Register() {
    const [loginName, setLoginName] = useState('')
    const [loginPW, setLoginPW] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const nav = useNavigate()

    const Register = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/users`,{
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
                    return response.text()
                }
                throw new Error("Den User gibt es schon!")
            })

            .catch(e=> setErrorMessage(e.message));
            nav("/login")

    }



    return(
        <div className="login">
            <Link to={'login'}>Login</Link>
            <div className="header">
                <h1> Registrierung neue User</h1>
            </div>
            {errorMessage}
            <div>
                <input className={'form_task'} type="text" placeholder={"E-Mail"} value ={loginName} onChange={ev => setLoginName(ev.target.value)}/>
                <input className={'form_desc'} type="password" placeholder={"Passwort"} value={loginPW} onChange={ev => setLoginPW(ev.target.value)} />
                <button onClick={Register}>  Anmelden</button>
            </div>
        </div>
    )}
