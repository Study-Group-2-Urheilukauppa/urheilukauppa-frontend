import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'http://localhost:3000/checkuser.php';

export default function ProtectedRoutes () {

  const [role, setRole] = useState("")

  useEffect(() => {
    
    

    axios.get(URL, {
      withCredentials : true
    })
        .then((response) => {
          setRole(response.data.role)
          
            
        }).catch(error => {
            alert(error)
        })
}, [])

if (role === undefined) {
  return <>Still loading...</>;
}

  return (
    role === "admin" ? <Outlet/> : <Navigate to="/"/> 
        
        
  )
}

