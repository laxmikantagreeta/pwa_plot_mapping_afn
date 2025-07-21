// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AppContext = createContext();

// export const useApp = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useApp must be used within an AppProvider');
//   }
//   return context;
// };

// export const AppProvider = ({ children }) => {
//   // Reference data states
//   const [referenceData, setReferenceData] = useState({
//     years: [],
//     seasons: [],
//     states: []
//   });
  
//   // Plot mapping states
//   const [plotData, setPlotData] = useState({
//     kmls: [],
//     dates: [],
//     boundary: [],
//     ndviData: [],
//     selectedFilters: {
//       yearId: '',
//       seasonId: '',
//       stateId: '',
//       kmlId: '',
//       selectedDate: '',
//       selectedIndex: 'NDVI'
//     }
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const api = axios.create({
//     baseURL: "http://localhost:8000",
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });

//   // Fetch reference data (years, seasons, states)
//   const fetchReferenceData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await api.get('/api/bayer/reference');
//       const data = response.data;
      
//       setReferenceData({
//         years: data.cultivationYear || [],
//         seasons: data.seasons || [],
//         states: data.states || []
//       });
      
//       return {
//         success: true,
//         data
//       };
//     } catch (err) {
//       const errorMessage = err.response?.data?.detail || "संदर्भ डेटा मिळाला नाही";
//       setError(errorMessage);
//       return {
//         success: false,
//         message: errorMessage
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Get KML list based on filters
//   const getKMLs = async (yearId, seasonId, stateId) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await api.get('/api/getKMLs', {
//         params: { yearId, seasonId, stateId }
//       });
      
//       setPlotData(prev => ({
//         ...prev,
//         kmls: response.data
//       }));
      
//       return {
//         success: true,
//         data: response.data
//       };
//     } catch (err) {
//       const errorMessage = err.response?.data?.detail || "KML यादी मिळाली नाही";
//       setError(errorMessage);
//       return {
//         success: false,
//         message: errorMessage
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Get available dates for KML
//   const getDates = async (kmlId) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await api.get('/api/getDates', {
//         params: { FieldId: kmlId }
//       });
      
//       setPlotData(prev => ({
//         ...prev,
//         dates: response.data
//       }));
      
//       return {
//         success: true,
//         data: response.data
//       };
//     } catch (err) {
//       const errorMessage = err.response?.data?.detail || "तारीख यादी मिळाली नाही";
//       setError(errorMessage);
//       return {
//         success: false,
//         message: errorMessage
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Get KML boundary
//   const getKMLBoundary = async (kmlId) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await api.get('/api/getKMLBoundary', {
//         params: { kmlId }
//       });
      
//       setPlotData(prev => ({
//         ...prev,
//         boundary: response.data
//       }));
      
//       return {
//         success: true,
//         data: response.data
//       };
//     } catch (err) {
//       const errorMessage = err.response?.data?.detail || "KML सीमा मिळाली नाही";
//       setError(errorMessage);
//       return {
//         success: false,
//         message: errorMessage
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Get plot bands mapping data
//   const getPlotBandsMappingList = async (fieldId, date) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await api.get('/api/plot-bands-mapping-list', {
//         params: { FieldId: fieldId, Date: date }
//       });
      
//       setPlotData(prev => ({
//         ...prev,
//         ndviData: response.data
//       }));
      
//       return {
//         success: true,
//         data: response.data
//       };
//     } catch (err) {
//       const errorMessage = err.response?.data?.detail || "प्लॉट डेटा मिळाला नाही";
//       setError(errorMessage);
//       return {
//         success: false,
//         message: errorMessage
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update selected filters
//   const updateFilters = (filters) => {
//     setPlotData(prev => ({
//       ...prev,
//       selectedFilters: {
//         ...prev.selectedFilters,
//         ...filters
//       }
//     }));
//   };

//   // Clear plot data
//   const clearPlotData = () => {
//     setPlotData({
//       kmls: [],
//       dates: [],
//       boundary: [],
//       ndviData: [],
//       selectedFilters: {
//         yearId: '',
//         seasonId: '',
//         stateId: '',
//         kmlId: '',
//         selectedDate: '',
//         selectedIndex: 'NDVI'
//       }
//     });
//   };

//   // Initialize reference data on app load
//   useEffect(() => {
//     fetchReferenceData();
//   }, []);

//   const clearError = () => {
//     setError(null);
//   };

//   const value = {
//     // Reference data
//     referenceData,
    
//     // Plot data
//     plotData,
    
//     // Loading and error states
//     loading,
//     error,
    
//     // API methods
//     fetchReferenceData,
//     getKMLs,
//     getDates,
//     getKMLBoundary,
//     getPlotBandsMappingList,
    
//     // Utility methods
//     updateFilters,
//     clearPlotData,
//     clearError
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };