import { useState } from "react";

const Register = () => {
    const [showModal, setShowModal] = useState(false);
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
                  <form className="text-sm">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-grey-darker">
                            Nombre:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded text-grey-darker"
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-grey-darker">
                            Apellido:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded text-grey-darker"
                            type="text"
                            name="apellido"
                            placeholder="Apellido"
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
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-grey-darker">
                            Confirmar contraseña:
                        </label>
                        <input

                            className="w-full px-3 py-2 border rounded text-grey-darker"
                            type="password"
                            name="confirmar contraseña"
                            placeholder="Confirmar contraseña"
                        />
                    </div>
                    <div>
                        <button className="block px-4 py-1 mx-auto mb-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-600 ">Registrar</button>
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