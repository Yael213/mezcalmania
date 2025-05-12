// src/pages/login.jsx
'use client'

import React, { useState, useContext, useEffect } from 'react'
import { UsuariosContext } from '../context/usuariosContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { mail, pass, loged, usuarios, master, usuario, loadUsuarios, setLog } =
    useContext(UsuariosContext)

  useEffect(() => {
    loadUsuarios()
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Por favor, ingresa tu correo electrónico y contraseña.')
      return
    }

    {
      usuarios.map((usr) =>
        usr.email === email && usr.password === password
          ? setLog(true, usr)
          : setError('Usuario o contraseña incorrectos.')
      )
    }
  }

  const handleClick = () => {
    setLog(false, usuario)
  }

  const handleWindow = () => {
    setLog(false, usuario)
    window.location.assign('/productos')
  }

  return (
    <div>
      {loged === false ? (
        <div className="flex items-center justify-center  py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl w-full space-y-2">
            <div>
              <h2 className=" text-center text-6xl font-jom text-white">
                Iniciar sesión
              </h2>
            </div>

            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <form
              className="mt-2 space-y-6 font-jom text-6xl"
              onSubmit={handleLogin}
            >
              <div className="rounded-md shadow-sm  space-y-2">
                <div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm md:text-xl"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center pt-1 px-4 border border-transparent sm:text-sm md:text-2xl font-medium rounded-md text-white bg-data-cherry-500 hover:bg-[#6b1b3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="mt-6 text-center text-6xl font-jom text-white">
            Bienvenido {usuario.nombre}
          </h2>
          {master.map((master) =>
            master.email === mail ? (
              <div key={master.mail}>
                <button
                  className="group relative w-full flex justify-center pt-1 px-4 border border-transparent sm:text-sm md:text-2xl font-medium rounded-md text-white bg-data-cherry-500 hover:bg-[#6b1b3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleWindow}
                >
                  Ir a modo admin
                </button>
                <button
                  className="group relative w-full flex justify-center pt-1 px-4 border border-transparent sm:text-sm md:text-2xl font-medium rounded-md text-white bg-data-cherry-500 hover:bg-[#6b1b3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleClick}
                >
                  Salir de cuenta
                </button>
              </div>
            ) : (
              <div key={''}>
                <h2 className="mt-6 text-center text-6xl font-jom text-white">
                  Ver pedidos
                </h2>
                <button
                  className="group relative w-full flex justify-center pt-1 px-4 border border-transparent sm:text-sm md:text-2xl font-medium rounded-md text-white bg-data-cherry-500 hover:bg-[#6b1b3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleClick}
                >
                  Salir de cuenta
                </button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
