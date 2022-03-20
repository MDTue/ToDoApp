import {useNavigate} from "react-router-dom";


export default function OnLogout(){
    const nav = useNavigate()
    localStorage.setItem('token', '')
    nav("/LOGIN")

    return(
        <div>

        </div>
    )
}