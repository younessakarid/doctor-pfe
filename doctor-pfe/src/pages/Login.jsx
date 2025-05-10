import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cabinetimg from "../assets/cabinetimg.jpg";
import logo from "../assets/logo.png"; // ⬅️ Ajout du logo

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Connexion:", { email, password, rememberMe });
    } else {
      console.log("Inscription:", { name, email, password });
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setRememberMe(false);
  };

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

          <div>
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

            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmez le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Se souvenir de moi
                  </label>
                </div>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  J'accepte les{" "}
                  <a href="#" className="text-[#1e84b5] hover:text-indigo-500">
                    Conditions d'utilisation
                  </a>{" "}
                  et la{" "}
                  <a href="#" className="text-[#1e84b5] hover:text-indigo-500">
                    Politique de confidentialité
                  </a>
                </label>
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1e84b5] "
            >
              {isLogin ? "Se connecter" : "Créer un compte"}
            </button>
          </div>
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
