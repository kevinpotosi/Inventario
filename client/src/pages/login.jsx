import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError(null); 
    setSuccess(null); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null); 
    setSuccess(null); 
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const response = await axios.post('https://security-module-utn.azurewebsites.net/api/auth', {
        username: username,
        password: password
      });

      
      console.log('Respuesta del inicio de sesión:', response.data);

      setSuccess('Inicio de sesión exitoso');

      navigate('../components/listproduct');

    } catch (error) {
      
      setError('Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.');
      console.error('Error en el inicio de sesión:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-black text-white">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-2/5">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input para el nombre de usuario */}
          <div>
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </span>
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Ingresa tu usuario"
            />
          </div>
          {/* Input para la contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </span>
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {/* Mostrar mensaje de error si existe */}
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          {/* Mostrar mensaje de éxito si existe */}
          {success && (
            <div className="text-green-500 text-sm">{success}</div>
          )}
          {/* Botón para enviar el formulario */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-black hover:from-blue-600 hover:via-blue-700 hover:to-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
