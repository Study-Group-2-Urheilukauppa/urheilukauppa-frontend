import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoutes = () => {
  const { auth } = useAuth();
  console.log(auth)
  

  return (
    auth?.role?.includes('admin')
        ? <Outlet/>
        : <Navigate to="/"/>
  )
}

export default ProtectedRoutes;