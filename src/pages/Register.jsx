import { useState } from "react";
import axios from "axios";

const Register = ({handleRegister}) => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
      if(!name || !username || !email || !password) {
        setError('Todos los campos son requeridos')
        setTimeout(() =>
        setError(''), 3000)
        return
      }
      if(username.length < 6){
        setError('Username debe ser mayor a 6 caracteres')
        setTimeout(() =>
        setError(''), 3000)
        return
      }
      if(password.length < 8){
        setError('Contraseña debe ser mayor a 8 caracteres')
        setTimeout(() =>
        setError(''), 3000)
        return
      }
      const user = 
      {
        "name": name,
        "username": username,
        "email": email,
        "password": password
      }
      try {
        const response = await axios.post('http://localhost:3333/subasta/api/users/register', user)
        const data = await response.data
        setName('')
        setUsername('')
        setEmail('')
        setPassword('')
        handleRegister(true)
        setShowModal(false)

      } catch (error) {
        setError('No se pudo registrar el usuario')
        setTimeout(() =>
        setError(''), 3000)
      }


    }

  return (
    <>
      <button
        className="text-sm font-light text-blue-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Crear cuenta
      </button>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
           
              {/*content*/}
              <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none w-96 focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">
                    Crear cuenta 
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl">
                        ❌
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <form className="text-sm" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-grey-darker">
                            Nombre:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded text-grey-darker"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-grey-darker">
                            Username:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded text-grey-darker"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-grey-darker">
                            Correo:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded text-grey-darker"
                            type="text"
                            name="correo"
                            placeholder="Correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-grey-darker">
                            Contraseña:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded text-grey-darker"
                            type="password"
                            name="contraseña"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="block px-4 py-1 mx-auto mb-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-600 ">Registrar</button>
                        <p>{error}</p>
                    </div>
                  </form>
                </div>
                
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>)
}
 
export default Register;