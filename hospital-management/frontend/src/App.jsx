import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminDashboard from './pages/admin/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import ReceptionistDashboard from './pages/receptionist/Dashboard';
import MedicalDashboard from './pages/medical/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add console log for debugging
    console.log('App component mounted');
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/doctor" 
            element={
              <ProtectedRoute role="doctor">
                <DoctorDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/receptionist" 
            element={
              <ProtectedRoute role="receptionist">
                <ReceptionistDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/medical" 
            element={
              <ProtectedRoute role="medical">
                <MedicalDashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;