import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Register from "./Register";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!email || !password) {
            setMessage('Todos los campos son requeridos')
            setTimeout(() => setMessage(''), 3000)
        }
        const user = {
            email,
            password
        }
        const response = await axios.post('http://localhost:3333/subasta/api/users/login', user)
        const data = response.data
        localStorage.setItem('loggedUserApp', JSON.stringify(data))
        window.location.assign("/");
    
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (res) => {
        if(res){
            setMessage("Usuario registrado satisfactoriamente")
            setTimeout(() => setMessage(""), 3000)
        }
    }

    return ( 
    
        <div className="p-2 mx-auto bg-white rounded shadow w-96">
            <Link to="/" className="block mx-auto text-center">
                <Logo />
            </Link>
            <div className="px-8 py-4 mx-16 text-xl font-bold text-center text-black border-b border-grey-500">Iniciar Sesión
            <Register handleRegister={handleRegister} className="block text-xs font-light text-blue-600"></Register>
            </div> 
            <form onSubmit={handleSubmit}>
                <div className="px-8 py-4">
                    <Input value={email} label="Correo" type="text" placeholder="abcdefg@..." onChange={handleChangeEmail} />
                    <Input value={password} label="Contraseña" type="password" placeholder="Contraseña" onChange={handleChangePass}/>
                    
                    <div className="mb-4">
                        <button
                            className="block px-24 py-1 mx-auto mb-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-600 ">
                            Save
                        </button>
                        <p className="text-center">{message}</p>
                    </div>
                </div>
            </form>
        </div>

 );
}
 
export default Login;