import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Register from "./Register";
useState
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`
            Email: ${email}
            Password: ${password}`)

        setEmail("")
        setPassword("")
    }
    const handleChangeEmail = (e) => {
        console.log(`changed to ${e.target.value}`);
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        console.log(`changed to ${e.target.value}`);
        setPassword(e.target.value);
    }

    return ( 
    
        <div className="mx-auto bg-white rounded shadow w-96">
            <Link to="/" className="block text-center">LOGO</Link>
            <div className="px-8 py-4 mx-16 text-xl font-bold text-center text-black border-b border-grey-500">Iniciar Sesión
            <Register className="block text-xs font-light text-blue-600"></Register>
            </div> 
            <form onSubmit={handleSubmit}>
                <div className="px-8 py-4">
                    <Input label="Correo" type="text" placeholder="abcdefg@..." onChange={handleChangeEmail} />
                    <Input label="Contraseña" type="password" placeholder="Contraseña" onChange={handleChangePass}/>
                    
                    <div className="mb-4">
                        <button
                            className="px-24 py-1 mx-16 mb-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-600 ">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>

 );
}
 
export default Login;