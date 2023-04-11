import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {

    let isAuthenticated = localStorage.getItem("role")

  return ( 
    isAuthenticated !== "admin" ? <Navigate to="Login" /> : <Outlet/> 
  )
}
