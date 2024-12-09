import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = ({ children, role }) => {
  useEffect(() => {
    console.log('Protected Route:', { role, isAuthenticated: !!localStorage.getItem('token') })
  }, [role])

  const isAuthenticated = localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole')

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login')
    return <Navigate to="/login" />
  }

  if (role && role !== userRole) {
    console.log('Unauthorized role, redirecting')
    return <Navigate to="/unauthorized" />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  )
}

export default ProtectedRoute
