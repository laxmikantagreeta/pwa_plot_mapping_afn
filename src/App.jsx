// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import appLogo from '/favicon.svg'
// import PWABadge from './PWABadge.jsx'
// import './App.css'
// import { Routes, Route } from 'react-router-dom'
// import LoginWithOTP from './pages/LoginWithOTP.jsx'
// import PlotMapping from './pages/PlotMapping.jsx'
// import DashboardPage from './pages/DashboardPage.jsx'
// import ForecastTable from './pages/ForecastTable.jsx'
// import FarmerProfile from './pages/FarmerProfile.jsx'
// import SettingsPage from './pages/SettingsPage.jsx'
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {

//   return (
//     // <FarmerProvider>
//       <Routes>
//         <Route path="/" element={<LoginWithOTP />} />
//         {/* <Route path="/" element={<Login />} /> */}
//         <Route path="/DashboardPage" element={<DashboardPage />} />
//         <Route path="/FarmerProfile" element={<FarmerProfile />} />
//         <Route path="/ForecastTable" element={<ForecastTable />} />
//         <Route path="/SettingsPage" element={<SettingsPage />} />
//         <Route path="/plot" element={<PlotMapping />} />
//         {/* <Route path="*" element={<Navigate to="/" />} /> */}
//       </Routes>
//     // </FarmerProvider>
//   )
// }

// export default App

// {/* <Route
//   path="/DashboardPage"
//   element={accessToken ? <DashboardPage /> : <Navigate to="/" />}
// /> */}


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginWithOTP from './pages/LoginWithOTP.jsx';
import PlotMapping from './pages/PlotMapping.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ForecastTable from './pages/ForecastTable.jsx';
import FarmerProfile from './pages/FarmerProfile.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import ProtectedRoute from "./components/ProtectedRoute";

// import { AuthProvider } from './contexts/AuthContext';
// import { FarmerProvider } from './contexts/FarmerContext';

function App() {
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
