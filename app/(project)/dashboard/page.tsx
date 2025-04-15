""
import { auth } from '@/app/libs/auth'
import { redirect } from 'next/navigation';
import { handleAuth } from '@/app/actions/handle-auth';
import React from 'react'

export default async function DashBoard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
          Protected DashBoard
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Welcome to the Protected DashBoard, {session?.user?.name}!
        </p>   
        {session.user?.email && (
          <form action={handleAuth}>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md">
              Logout
            </button> 
          </form>
        )}
      </div>
    </div>
  )
}
