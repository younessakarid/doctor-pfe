import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png' // assure-toi que le chemin est correct
import cabinetimg from '../assets/cabinetimg.jpg' // pareil ici

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const toggleMode = () => setIsLogin(!isLogin)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!isLogin) {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (err) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.")
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="h-screen flex">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">

          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="logo" 
              className="w-40 cursor-pointer" 
              onClick={() => navigate('/')} 
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {isLogin ? "Connectez-vous à votre compte" : "Créer un nouveau compte"}
          </h1>

          <p className="text-gray-600 mb-8">
            {isLogin ? "Vous n'avez pas de compte ? " : "Vous avez déjà un compte ? "}
            <button
              onClick={toggleMode}
              className="text-[#1e84b5] font-medium hover:text-500"
            >
              {isLogin ? "Créez-en un maintenant" : "Connectez-vous"}
            </button>
          </p>

          <form onSubmit={onSubmitHandler}>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1e84b5] hover:bg-[#156a94]"
            >
              {isLogin ? "Se connecter" : "Créer un compte"}
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 relative">
        <img 
          src={cabinetimg} 
          alt="Espace de travail" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
    </div>
  );
}

export default Login
