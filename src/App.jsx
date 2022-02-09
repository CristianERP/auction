import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/login") {
    return (
    <div className="min-h-screen bg-gray-700">
      <main className="grid h-screen px-8 pt-4 place-items-center">
        <Login />
      </main>
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-700">
      <header className="px-8 pt-4">
        <Navbar />
      </header>
    <main className="px-8 pt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        //login y registro de usuario
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
    </div>
  )
}

export default App
