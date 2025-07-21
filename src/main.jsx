import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// // src/index.js or App.js
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports.js';
// Amplify.configure(awsconfig);
import { AuthProvider } from "../src/contexts/AuthContext.jsx";
import { FarmerProvider } from "../src/contexts/FarmerContext.jsx";
// import { SelectionProvider } from "../src/contexts/SelectionContext.jsx";

Amplify.configure({
  ...awsconfig,
  Auth: {
    ...awsconfig.Auth,
    region: awsconfig.aws_project_region,
    userPoolId: awsconfig.aws_user_pools_id,
    userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
    authenticationFlowType: 'CUSTOM_AUTH',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FarmerProvider>
          {/* <SelectionProvider> */}
            <App />
          {/* </SelectionProvider> */}
        </FarmerProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
  })
}
