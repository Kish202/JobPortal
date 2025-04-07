import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Default route - redirect to login */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Login route - accessible to everyone */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Job Seeker Dashboard */}
          <Route 
            path="/jobseeker" 
            element={
              <ProtectedRoute allowedUserTypes={['jobseeker']}>
                <JobSeekerDashboard/>
              </ProtectedRoute>
            } 
          />
          
          {/* Protected Recruiter Dashboard */}
          <Route 
            path="/recruiter" 
            element={
              <ProtectedRoute allowedUserTypes={['recruiter']}>
                <RecruiterDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Protected Manager Dashboard */}
          <Route 
            path="/manager" 
            element={
              <ProtectedRoute allowedUserTypes={['manager']}>
                <ManagerDashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Fallback route for any other paths */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;