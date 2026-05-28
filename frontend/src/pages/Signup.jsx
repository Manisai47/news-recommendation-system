import { useState } from "react"
import axios from "axios"

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/signup",
        {
          name,
          email,
          password
        }
      )

      alert(response.data.message)

    } catch (error) {

      alert(
        error.response.data.message
      )

    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-4 rounded-xl bg-zinc-800 mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 rounded-xl bg-zinc-800 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 rounded-xl bg-zinc-800 mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-red-500 hover:bg-red-600 p-4 rounded-xl font-semibold"
        >
          Signup
        </button>

      </div>

    </div>
  )
}

export default Signup