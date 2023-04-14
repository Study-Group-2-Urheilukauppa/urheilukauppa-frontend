import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {

    let isAuthenticated = localStorage.getItem("token")

  return ( 
    isAuthenticated !== "token" ? <Outlet/> : <Navigate to="Login" />
  )
}
