import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      const response = await axios.post(
        "https://security-module-utn.azurewebsites.net/api/auth",
        {
          username: username,
          password: password,
        }
      );

      console.log("Respuesta del inicio de sesión:", response.data);

      setSuccess("Inicio de sesión exitoso");

      navigate("../components/listproduct");
    } catch (error) {
      setError(
        "Credenciales incorrectas. Por favor, verifica tu usuario y contraseña."
      );
      console.error(
        "Error en el inicio de sesión:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen">
      <div class="w-1/2 h-screen hidden lg:block">
        <img
          src="https://www.tlhlogistica.com/wp-content/uploads/2020/07/inventario.jpg"
          alt="Placeholder Image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Ingresar</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div class="mb-4">
            <label for="username" class="block text-gray-600">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {/* Mostrar mensaje de error si existe */}
          {error && <div class="text-red-500 text-sm">{error}</div>}
          {/* Mostrar mensaje de éxito si existe */}
          {success && <div class="text-green-500 text-sm">{success}</div>}
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
