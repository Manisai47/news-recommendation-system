import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black text-white">

        <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">

          <Link
            to="/"
            className="text-3xl font-bold text-red-500"
          >
            NewsAI
          </Link>

          <div className="space-x-6">

            <Link
              to="/"
              className="hover:text-red-400"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="hover:text-red-400"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="hover:text-red-400"
            >
              Signup
            </Link>

            <Link
              to="/dashboard"
              className="hover:text-red-400"
            >
              Dashboard
            </Link>

          </div>

        </nav>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App