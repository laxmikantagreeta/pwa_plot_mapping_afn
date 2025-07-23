
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginWithOTP from './pages/LoginWithOTP.jsx';
import PlotMapping from './pages/PlotMapping.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ForecastTable from './pages/ForecastTable.jsx';
import FarmerProfile from './pages/FarmerProfile.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import ProtectedRoute from "./components/ProtectedRoute";
import useStatusBarColor from './components/useStatusBarColor.js';
// import { AuthProvider } from './contexts/AuthContext';
// import { FarmerProvider } from './contexts/FarmerContext';

function App() {
  useStatusBarColor()
  return (
    // <AuthProvider>
    //   <FarmerProvider>
        <Routes>
          <Route path="/" element={<LoginWithOTP />} />

          {/* Protected Routes */}
          <Route path="/DashboardPage" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />

          <Route path="/FarmerProfile" element={
            <ProtectedRoute>
              <FarmerProfile />
            </ProtectedRoute>
          } />

          <Route path="/ForecastTable" element={
            <ProtectedRoute>
              <ForecastTable />
            </ProtectedRoute>
          } />

          <Route path="/SettingsPage" element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          } />

          <Route path="/plot" element={
            <ProtectedRoute>
              <PlotMapping />
            </ProtectedRoute>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    //   </FarmerProvider>
    // </AuthProvider>
  );
}

export default App;
