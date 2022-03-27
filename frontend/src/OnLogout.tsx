import {useNavigate} from "react-router-dom";


export default function OnLogout(){
    const nav = useNavigate()
    localStorage.setItem('token', '')
    localStorage.setItem('task', '')
    localStorage.setItem('descrition', '')
    nav("/LOGIN")

    return(
        <div>

        </div>
    )
}