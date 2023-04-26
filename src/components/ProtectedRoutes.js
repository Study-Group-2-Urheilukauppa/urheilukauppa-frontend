import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'http://localhost:3000/api/checkuser.php';

export default function ProtectedRoutes () {

  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(URL, {
      withCredentials: true
    })
      .then((response) => {
        setRole(response.data.role);
        setIsLoading(false);
      })
      .catch(error => {
        alert(error);
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    role === "admin" ? <Outlet /> : <Navigate to="/" />
  )
}
