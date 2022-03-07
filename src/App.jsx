import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {
  Navigate,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Featured from "./pages/Featured"
import Myauction from "./pages/Myauction"
import AuctionDetail from "./components/AuctionDetail"
import { useState, useEffect } from 'react'
import CategoriaList from "./components/CategoriaList"



function App() {
  const location = useLocation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUserApp')
    if(loggedUser){
      const usuario = JSON.parse(loggedUser)
      setUser(usuario)
    }
  },[])



  if (location.pathname === "/login" && !user) {
    return (
    <div className="min-h-screen bg-gray-700">
      <main className="grid h-screen px-8 pt-4 place-items-center">
        <Login  />
      </main>
    </div>
    );
    }

  return (
    <div className="min-h-screen bg-gray-700">
      <header className="px-8 pt-4">
        <Navbar user={user}/>
      </header>
    <main className="px-8 pt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoriaList />} />
        <Route path="/login" element={user ? <Home />:<Login/>}/>
        <Route path="/featured" element={<Featured/>} />
        <Route path="//myauction" element={user ? <Myauction/>:<Navigate to="/login" />}/>
        <Route path="/detail"> 
          <Route path=":id" element={<AuctionDetail />} />
        </Route>
      </Routes>
    </main>
    </div>
  )
}

export default App
