"use client"

import React from 'react'
import Image from 'next/image'
import Login from '../Components/Login'
import Registro from '../Components/Registro'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-violet py-12 px-4 sm:px-6 lg:px-8">
      <div >
      <Login></Login>
      </div>
        
    </div>
  )
}

export default page
