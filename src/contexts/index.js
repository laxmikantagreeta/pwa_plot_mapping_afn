// Export all contexts from a single file for easier imports
export { AuthProvider, useAuth } from './AuthContext';
export { FarmerProvider, useFarmer } from './FarmerContext';
export { AppProvider, useApp } from './AppContext';

// Combined provider component for easier setup
import React from 'react';
import { AuthProvider } from './AuthContext';
import { FarmerProvider } from './FarmerContext';
import { AppProvider } from './AppContext';

export const CombinedProvider = ({ children }) => {
  return (
    <AuthProvider>
      <FarmerProvider>
        <AppProvider>
          {children}
        </AppProvider>
      </FarmerProvider>
    </AuthProvider>
  );
};