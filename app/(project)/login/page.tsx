import { handleAuth } from '@/app/actions/handle-auth'
import React from 'react'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
          Login Page
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Welcome to the Login Page!
        </p>         
        <form action={handleAuth}>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md">
            Login With Google!
          </button> 
        </form>
      </div>
    </div>
  )
}
