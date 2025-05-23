import axios from 'axios'
import React, { useState, useContext } from 'react';
import logo from'../assets/logo.png'

import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import Cabiner from '../assets/Cabiner.png' 

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const { setDToken } = useContext(DoctorContext)

  
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

     if (state === 'Admin') {
    const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
    if (data.success) {
      console.log("Admin Token:", data.token) // Display the Admin token
      setAToken(data.token)
      localStorage.setItem('aToken', data.token)
    } else {
      const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
      if (data.success) {
        setDToken(data.token)
        localStorage.setItem('dToken', data.token)
      } else {
        toast.error(data.message)
      }

    }
  }
}

  return (
    <form
  onSubmit={onSubmitHandler}
  className="flex items-center justify-center min-h-screen bg-cover bg-center shadow-sm "
  style={{ backgroundImage: `url(${Cabiner})` }}
>
  <div className="bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-md flex flex-col gap-6 animate-fade-in">
    <div className="flex justify-center">
      <img
        src={logo}
        alt="logo"
        className="w-32 cursor-pointer transition-transform hover:scale-105"
        onClick={() => navigate('/')}
      />
    </div>

    <h3 className="text-2xl font-bold text-center text-gray-800">
      <span className="text-[#1e84b5]">{state}</span> Se connecter
    </h3>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e84b5] transition-shadow"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e84b5] transition-shadow"
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 px-4 rounded-lg text-white bg-[#1e84b5] hover:bg-[#166b92] transition-colors font-semibold shadow-md"
    >
      Se connecter
    </button>

    <div className="text-center text-sm mt-2 text-gray-600">
      {state === 'Admin' ? (
        <p>
          Connexion médecin ?{' '}
          <span
            onClick={() => setState('Doctor')}
            className="text-[#1e84b5] underline cursor-pointer hover:text-[#166b92]"
          >
            Cliquez ici
          </span>
        </p>
      ) : (
        <p>
          Connexion administrateur ?{' '}
          <span
            onClick={() => setState('Admin')}
            className="text-[#1e84b5] underline cursor-pointer hover:text-[#1e84b5]"
          >
            Cliquez ici
          </span>
        </p>
      )}
    </div>
  </div>
</form>

  )
}

export default Login
